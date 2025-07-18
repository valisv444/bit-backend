import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { Books } from './pages/books/books';
import { Authors } from './pages/authors/authors';
import { Info } from './pages/info/info';  
import { About } from './pages/about/about';
import { Subscription } from './pages/subscription/subscription';
import { Suggestions } from './pages/suggestions/suggestions';
import { FavoritesComponent } from './pages/favorites/favorites';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'books', component: Books },
  { path: 'authors', component: Authors },
  { path: 'info', component: Info }, 
  { path: 'about', component: About },
  { path: 'subscription', component: Subscription },
  { path: 'suggestions', component: Suggestions },
  { path: 'favorites', component: FavoritesComponent },
  { path: '**', component: NotFound },
];
