import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MuscleService {
  private apiUrl = 'https://api.api-ninjas.com/v1/exercises?muscle=';

  constructor(private http: HttpClient) { }

  getDetails(muscle: string): Observable<any> {
    const url = this.apiUrl + muscle;
    return this.http.get(url);
  }
}


