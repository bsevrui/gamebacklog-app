import { Routes } from "@angular/router";
import { gamesRoutes } from "./games/games.routes";
import { genresRoutes } from "./genres/genres.routes";
import { platformsRoutes } from "./platforms/platforms.routes";

export const listRoutes: Routes = [
    {
        path: '',
        children: gamesRoutes,
    },
    {
        path: 'games',
        children: gamesRoutes,
    },
    {
        path: 'platforms',
        children: platformsRoutes,
    },
    {
        path: 'genres',
        children: genresRoutes,
    }
];