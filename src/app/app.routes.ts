import { Routes } from '@angular/router';
import { aboutRoutes } from './pages/about/about.route';
import { authRoutes } from './pages/auth/auth.route';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'about',
    children: aboutRoutes,
  },
  {
    path: 'auth',
    children: authRoutes,
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
  }
];