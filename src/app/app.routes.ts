import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './shared/layouts/default-layout/default-layout.component';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ServiceComponent } from './features/service/service.component';
import { ContactComponent } from './features/contact/contact.component';
import { GetAQuoteComponent } from './features/get-a-quote/get-a-quote.component';
import { TheTeamComponent } from './features/pages/the-team/the-team.component';
import { GalleryComponent } from './features/pages/gallery/gallery.component';
import { ImageRollGalleryComponent } from './features/pages/image-roll-gallery/image-roll-gallery.component';
import { Lounge55Component } from './features/pages/lounge-55/lounge-55.component';
import { MainMenuComponent } from './features/pages/lounge-55/main-menu/main-menu.component';
import { MenuComponent } from './features/pages/lounge-55/menu/menu.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'Service',
        component: ServiceComponent,
      },
      {
        path: 'the-team',
        component: TheTeamComponent,
      },
      {
        path: 'Contact',
        component: ContactComponent,
      },
      {
        path: 'getAQuote',
        component: GetAQuoteComponent,
      },
      {
        path: 'gallery',
        component: GalleryComponent,
      },
      {
        path: 'image-roll-gallery',
        component: ImageRollGalleryComponent,
      },
      {
        path: 'Lounge55',
        component: Lounge55Component,
      },
      {
        path: 'menu',
        component: MenuComponent,
      },
    ],
  },
];
