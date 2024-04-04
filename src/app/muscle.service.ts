// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class MuscleService {

//   constructor() { }
// }

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class MuscleService {

//   constructor(private http: HttpClient) { }

//   getMuscles(muscle: string): Observable<any> {
//     return this.http.get(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`);
//   }
// }

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class MuscleService {
//   private apiUrl = 'https://api.api-ninjas.com/v1/exercises?muscle=';

//   constructor(private http: HttpClient) { }

//   getMuscle(muscle: string): Observable<any> {
//     return this.http.get(this.apiUrl + muscle);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MuscleService {
  
  apiUrl = 'https://api.api-ninjas.com/v1/exercises?muscle=';
  constructor(private http: HttpClient) { }

  getConfig(){
    const headers = new HttpHeaders()
    .set('X-Api-Key', 'qgrOc70d76uqpvJrBz4hO2YneOP2souqsuTIr8Sm')
    .set('content-type', 'application/json')
    
    const options = { headers: headers}
    return this.http.get(this.apiUrl, options);
  }
}