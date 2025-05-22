import { Routes } from "@angular/router";

export const gamesRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./games.page').then(m => m.GamesPage),
    },
    {
        path: 'info/:id',
        loadComponent: () => import('./game-info/game-info.page').then(m => m.GameInfoPage),
    }
];