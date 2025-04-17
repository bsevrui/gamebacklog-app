import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: 'userGames',
        loadComponent: () =>
          import('./user-games/user-games.page').then((m) => m.UserGamesPage),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
