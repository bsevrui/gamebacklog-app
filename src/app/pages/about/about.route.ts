import { Routes } from "@angular/router";

export const aboutRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./about.page').then(m => m.AboutPage),
    },
    {
        path: 'fairuse',
        loadComponent: () => import('./fair-use/fair-use.page').then(m => m.FairUsePage),
    }
];