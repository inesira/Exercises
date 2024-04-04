import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenServiceService {
  
  apiUrl = 'https://api.api-ninjas.com/v1/exercises?muscle=lats';
  constructor(private http: HttpClient) { }

  getConfig(){
    const headers = new HttpHeaders()
    .set('X-Api-Key', 'qgrOc70d76uqpvJrBz4hO2YneOP2souqsuTIr8Sm')
    .set('content-type', 'application/json')
    
    const options = { headers: headers}
    return this.http.get(this.apiUrl, options);
  }
}
