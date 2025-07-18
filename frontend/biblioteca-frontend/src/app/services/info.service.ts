import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  info = signal<any[]>([]);
  private apiUrl = 'http://localhost:3000/api/info';

  constructor(private http: HttpClient) {
    this.loadInfo();
  }

  loadInfo() {
    this.http.get<any[]>(this.apiUrl).subscribe((data) => {
      this.info.set(data);
    });
  }
}