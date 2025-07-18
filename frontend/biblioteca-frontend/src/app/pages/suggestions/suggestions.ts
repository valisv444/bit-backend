import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  standalone: true,
  selector: 'suggestion',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './suggestions.html',
  styleUrls: ['./suggestions.css']
})
export class Suggestions {
  form: FormGroup;
  loading = false;

  tipos = [
    { label: 'Libro', value: 'libro' },
    { label: 'Autor', value: 'autor' },
    { label: 'Género literario', value: 'genero' },
    { label: 'Tema histórico', value: 'tema' },
    { label: 'Página de recurso', value: 'recurso' },
    { label: 'Otro', value: 'otro' }
  ];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.form = this.fb.group({
      tipo: ['', Validators.required],
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required, Validators.minLength(10)]],
      usuario: ['']
    });
  }

  enviar() {
    if (this.form.invalid) {
      this.toastr.error('Completa todos los campos correctamente.');
      return;
    }

    if (!this.form.value.usuario || this.form.value.usuario.trim() === '') {
      this.form.patchValue({ usuario: 'Anónimo' });
    }

    this.loading = true;
    const formValue = this.form.value;

    console.log('📦 Enviando sugerencia:', formValue);

    this.http.post('http://localhost:3000/api/suggestions', formValue).subscribe({
      next: () => {
        this.toastr.success('¡Gracias por tu sugerencia!');
        this.form.reset();
        this.loading = false;

        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000);
      },
      error: (err) => {
        console.error('❌ Error al enviar:', err);
        this.toastr.error('No se pudo enviar la sugerencia.');
        this.loading = false;
      }
    });
  }
}
