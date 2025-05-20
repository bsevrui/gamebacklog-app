import { Routes } from '@angular/router';
import { aboutRoutes } from './pages/about/about.route';
import { authRoutes } from './pages/auth/auth.route';
import { listRoutes } from './pages/list/list.routes';

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
    path: 'list',
    children: listRoutes,
  }
];