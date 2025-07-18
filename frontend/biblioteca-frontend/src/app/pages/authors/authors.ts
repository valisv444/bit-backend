import { Component, computed, inject } from '@angular/core';
import { AuthorsService } from '../../services/authors.service';
import { CommonModule } from '@angular/common';
import { FavoriteService } from '../../services/favorite.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'authors',
  imports: [CommonModule, FormsModule],
  templateUrl: './authors.html',
  styleUrls: ['./authors.css']
})
export class Authors {
  private authorsService = inject(AuthorsService);
  private favoriteService = inject(FavoriteService);

  authors = computed(() => this.authorsService.authors());

  selectedItem: any = null;
  note: string = '';
  rating: number = 1;

  openFavoriteForm(author: any) {
    this.selectedItem = author;
    this.note = '';
    this.rating = 1;
  }

  cancelFavorite() {
    this.selectedItem = null;
  }

  addFavorite() {
    const newFavorite = {
      user: 'valec@correo.com',
      type: 'autor',
      title: this.selectedItem.nombre,
      personalNote: this.note,
      rating: this.rating,
      originalRefId: this.selectedItem._id
    };

    this.favoriteService.createFavorite(newFavorite).subscribe(() => {
      alert('👩‍🏫 Autor agregado a favoritos');
      this.cancelFavorite();
    });
  }
}
