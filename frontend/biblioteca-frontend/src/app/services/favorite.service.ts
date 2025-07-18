import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private apiUrl = 'http://localhost:3000/api/favorites';
  private refreshFavorites$ = new BehaviorSubject<void>(undefined);

  constructor(private http: HttpClient) {}

  get refresh$(): Observable<void> {
    return this.refreshFavorites$.asObservable();
  }

  private triggerRefresh(): void {
    this.refreshFavorites$.next();
  }

  createFavorite(favorite: any): Observable<any> {
    return this.http.post(this.apiUrl, favorite).pipe(
      tap(() => this.triggerRefresh())
    );
  }

  getFavorites(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteFavorite(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.triggerRefresh())
    );
  }

  updateFavorite(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
}
