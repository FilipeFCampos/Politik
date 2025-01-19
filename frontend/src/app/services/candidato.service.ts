import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CandidatoService {
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  searchCandidatos(term: string): Observable<any[]> {
    const url = `${this.baseUrl}/candidatos/?search=${term}`;
    return this.http.get<any[]>(url);
  }
}
