import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenServiceService {
  
  apiUrl = 'https://api.api-ninjas.com/v1/exercises?muscle=';
  constructor(private http: HttpClient) { }

  // getConfig(){
  //   const headers = new HttpHeaders()
  //   .set('X-Api-Key', 'qgrOc70d76uqpvJrBz4hO2YneOP2souqsuTIr8Sm')
  //   .set('content-type', 'application/json')
    
  //   const options = { headers: headers}
  //   return this.http.get<any[]>(this.apiUrl, options);
  // }

  // getMuscle(muscle: string) {
  //   const headers = new HttpHeaders()
  //     .set('X-Api-Key', 'qgrOc70d76uqpvJrBz4hO2YneOP2souqsuTIr8Sm')
  //     .set('Content-Type', 'application/json');

  //   return this.http.get<any[]>(this.apiUrl + '?muscle=' + muscle, { headers });
  // }
  getExercises(muscle: string): Observable<any> {
    const url = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}&apiKey=qgrOc70d76uqpvJrBz4hO2YneOP2souqsuTIr8Sm`;
    return this.http.get(url);
  }

}

