import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
// import { provideClientHydration } from '@angular/platform-browser';
import {provideProtractorTestingSupport} from '@angular/platform-browser';
// import { MuscleService } from './muscle.service';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideProtractorTestingSupport()]
};

