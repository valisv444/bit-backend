import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'subscription',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './subscription.html',
  styleUrls: ['./subscription.css'],
})
export class Subscription {
  form: FormGroup;
  enviadoConExito = false;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      intereses: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  enviar() {
    if (this.form.invalid) {
      this.toastr.error('Por favor completa los campos obligatorios');
      return;
    }

    this.loading = true;

    this.http.post('http://localhost:3000/api/subscribers', this.form.value).subscribe({
      next: () => {
        this.enviadoConExito = true;
        localStorage.setItem('subscriber', JSON.stringify(this.form.value));
        this.toastr.success('¡Gracias por suscribirte! 🎉');
        this.form.reset();
        this.loading = false;

        setTimeout(() => {
          this.router.navigate(['']);
        }, 5000); 
      },
      error: () => {
        this.toastr.error('Ocurrió un error al enviar la suscripción');
        this.loading = false;
      }
    });
  }

  seleccionarTodo() {
    this.form.patchValue({ intereses: 'Todo' });
  }
}
