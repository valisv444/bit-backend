import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit {
  images: string[] = [
    'https://i.postimg.cc/kGYvhppc/catedral-medieval.jpg',
    'https://i.postimg.cc/WzqyygN6/libro-antiguo.jpg',
    'https://i.postimg.cc/7hQv5XtP/monje-escribiendo.jpg',
    'https://i.postimg.cc/N0D6f3PD/castillo-niebla.jpg'
  ];

  currentIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 4000); // cambia cada 4 segundos
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
