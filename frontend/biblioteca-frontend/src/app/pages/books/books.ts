
import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from '../../services/books.service';
import { FavoriteService } from '../../services/favorite.service'; 
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'books',
  imports: [CommonModule, FormsModule],
  templateUrl: './books.html',
  styleUrls: ['./books.css']
})
export class Books {
  private booksService = inject(BooksService);
  private favoriteService = inject(FavoriteService); 
  books = computed(() => this.booksService.books());

 selectedItem: any = null;
note: string = '';
rating: number = 1;

openFavoriteForm(item: any) {
  this.selectedItem = item;
  this.note = '';
  this.rating = 1;
}


  cancelFavorite() {
    this.selectedItem = null;
  }

  addFavorite() {
  const newFavorite = {
    user: 'valec@correo.com',
    type: 'libro',
    title: this.selectedItem.titulo, 
    personalNote: this.note,
    rating: this.rating,
    originalRefId: this.selectedItem._id || ''
  };

    this.favoriteService.createFavorite(newFavorite).subscribe(() => {
      alert('📘 Libro agregado a favoritos');
      this.cancelFavorite();
    });
  }
}
