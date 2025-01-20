import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  private baseUrl = 'http://127.0.0.1:8000/api/submit-form/';

  constructor(private http: HttpClient) {}

  searchCandidatos(term: string): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}
