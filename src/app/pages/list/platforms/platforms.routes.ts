import { Routes } from "@angular/router";

export const platformsRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./platforms.page').then(m => m.PlatformsPage),
    },
    {
        path: 'info/:id',
        loadComponent: () => import('./platform-info/platform-info.page').then(m => m.PlatformInfoPage),
    }
];