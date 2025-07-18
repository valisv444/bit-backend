import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteService } from '../../services/favorite.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-favorites',
  imports: [CommonModule, FormsModule],
  templateUrl: './favorites.html',
  styleUrls: ['./favorites.css']
})
export class FavoritesComponent implements OnInit {
  private favoriteService = inject(FavoriteService);
  favorites = signal<any[]>([]);

  selectedItem: any = null;
  note: string = '';
  rating: number = 1;

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.favoriteService.getFavorites().subscribe((data) => {
      this.favorites.set(data);
    });
  }

  deleteFavorite(id: string): void {
    this.favoriteService.deleteFavorite(id).subscribe(() => {
      this.loadFavorites();
    });
  }

  editFavorite(fav: any): void {
    this.selectedItem = fav;
    this.note = fav.personalNote || '';
    this.rating = fav.rating || 1;
  }

  saveFavorite(fav: any): void {
    const updated = {
      personalNote: this.note,
      rating: this.rating
    };

    this.favoriteService.updateFavorite(fav._id, updated).subscribe(() => {
      alert('✅ Favorito actualizado');
      this.selectedItem = null;
      this.loadFavorites();
    });
  }

  cancelEdit(): void {
    this.selectedItem = null;
  }
}

