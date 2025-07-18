import { Component, inject, computed } from '@angular/core';
import { InfoService } from '../../services/info.service';
import { FavoriteService } from '../../services/favorite.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'info',
  imports: [CommonModule, FormsModule],
  templateUrl: './info.html',
  styleUrls: ['./info.css']
})
export class Info {
  private infoService = inject(InfoService);
  private favoriteService = inject(FavoriteService);

  info = computed(() => this.infoService.info());

  selectedItem: any = null;
  note: string = '';
  rating: number = 1;

  openFavoriteForm(genero: any) {
    this.selectedItem = genero;
    this.note = '';
    this.rating = 1;
  }

  cancelFavorite() {
    this.selectedItem = null;
  }

  addFavorite() {
    const newFavorite = {
      user: 'valec@correo.com',
      type: 'tema',
      title: this.selectedItem.titulo, 
      personalNote: this.note,
      rating: this.rating,
      originalRefId: this.selectedItem._id || ''
    };

    this.favoriteService.createFavorite(newFavorite).subscribe(() => {
      alert('📚 Género agregado a favoritos');
      this.cancelFavorite();
    });
  }
}
