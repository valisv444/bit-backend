import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  authors = signal<any[]>([]);
  private apiUrl = 'http://localhost:3000/api/authors';

  constructor(private http: HttpClient) {
    this.loadAuthors();
  }

  loadAuthors() {
    this.http.get<any[]>(this.apiUrl).subscribe((data) => {
      this.authors.set(data);
    });
  }
}