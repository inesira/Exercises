import { Routes } from '@angular/router';

// import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CollectionsComponent } from './collections/collections.component';
import { SneakersComponent } from './sneakers/sneakers.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: 'collections', component: CollectionsComponent},
    {path: 'men', component: MenComponent},
    {path: 'women', component: WomenComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'men/:muscle', component: CollectionsComponent},
    {path: 'sneakers', component: SneakersComponent},
    {path: '', redirectTo: '/sneakers', pathMatch: 'full'}
];
