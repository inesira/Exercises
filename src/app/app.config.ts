import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { MuscleService } from './muscle.service';
import { ApiKeyInterceptor } from '../../interceptors/apikey.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideHttpClient(),
    { provide: ApiKeyInterceptor},
    { provide: MuscleService}
  ]
};
