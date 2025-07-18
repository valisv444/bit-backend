import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuggestionsService {
  private apiUrl = 'http://localhost:3000/api/suggestions';  

  constructor(private http: HttpClient) {}

  postSuggestion(suggestion: any): Observable<any> {
    return this.http.post(this.apiUrl, suggestion);
  }

  getSuggestions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
