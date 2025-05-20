import { Routes } from "@angular/router";

export const listRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./games/games.page').then(m => m.GamesPage),
    },
    {
        path: 'games',
        loadComponent: () => import('./games/games.page').then(m => m.GamesPage),
    },
    {
        path: 'platforms',
        loadComponent: () => import('./platforms/platforms.page').then(m => m.PlatformsPage),
    },
    {
        path: 'genres',
        loadComponent: () => import('./genres/genres.page').then(m => m.GenresPage),
    }
];