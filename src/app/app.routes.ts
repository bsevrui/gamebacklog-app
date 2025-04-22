import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.page').then( m => m.AboutPage)
  },
  {
    path: 'fair-use',
    loadComponent: () => import('./pages/about/fair-use/fair-use.page').then( m => m.FairUsePage)
  },
  {
    path: 'games',
    loadComponent: () => import('./pages/list/games/games.page').then( m => m.GamesPage)
  },
  {
    path: 'platforms',
    loadComponent: () => import('./pages/list/platforms/platforms.page').then( m => m.PlatformsPage)
  },
  {
    path: 'genres',
    loadComponent: () => import('./pages/list/genres/genres.page').then( m => m.GenresPage)
  },
];