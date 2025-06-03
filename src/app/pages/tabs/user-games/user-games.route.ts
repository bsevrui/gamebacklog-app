import { Routes } from "@angular/router";
import { authGuard } from "src/app/core/guards/auth.guard";

export const usergamesRoutes: Routes = [
    {
        path: '',
        canActivate: [authGuard],
        loadComponent: () => import('../user-games/user-games.page').then(m => m.UserGamesPage),
    },
    {
        path: 'update/:userId/:gameId',
        canActivate: [authGuard],
        loadComponent: () => import('./update/update.page').then(m => m.UpdatePage),
    },
    {
        path: 'add/:userId/:gameId',
        canActivate: [authGuard],
        loadComponent: () => import('./add/add.page').then(m => m.AddPage),
    }
];