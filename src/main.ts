import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { NavbarComponent } from './app/navbar/navbar.component';

bootstrapApplication(NavbarComponent, appConfig)
  .catch((err) => console.error(err));