import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books = signal<any[]>([]);

  private apiUrl = 'http://localhost:3000/api/books';

  constructor(private http: HttpClient) {
    this.loadBooks();
  }

  loadBooks() {
    this.http.get<any[]>(this.apiUrl).subscribe((data) => {
      this.books.set(data);
    });
  }
}