import { Routes } from "@angular/router";

export const genresRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./genres.page').then(m => m.GenresPage),
    },
    {
        path: 'info',
        loadComponent: () => import('./genre-info/genre-info.page').then(m => m.GenreInfoPage),
    }
];