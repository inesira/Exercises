import { Routes } from '@angular/router';

// import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CollectionsComponent } from './collections/collections.component';
import { SneakersComponent } from './sneakers/sneakers.component';

export const routes: Routes = [
    {path: 'collections', component: CollectionsComponent},
    {path: 'sneakers', component: SneakersComponent},
    {path: '', redirectTo: '/sneakers', pathMatch: 'full'}
];
