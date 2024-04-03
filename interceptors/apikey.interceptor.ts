import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiKey = 'k4vfLBv9qoZFAHjZKGh/hQ==WazC5x9SjgxD2tjD';

    const modifiedRequest = request.clone({
      setHeaders: {
        'Api-Key': apiKey
      }
    });

    return next.handle(modifiedRequest);
  }
}
