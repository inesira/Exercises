// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable()
// export class ApiKeyInterceptor implements HttpInterceptor {
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const apiKey = 'qgrOc70d76uqpvJrBz4hO2YneOP2souqsuTIr8Sm';

//     const modifiedRequest = request.clone({
//       setHeaders: {
//         'X-Api-Key': apiKey,
//         'content-type': 'application/json'
//       }
//     });

//     return next.handle(modifiedRequest);
//   }
// }

import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {

  private apiKey = 'qgrOc70d76uqpvJrBz4hO2YneOP2souqsuTIr8Sm'; 

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.apiKey}`
      }
    });
    return next.handle(modifiedReq);
  }
}
