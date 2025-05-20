import { Routes } from "@angular/router";

export const authRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./login/login.page').then(m => m.LoginPage),
    },
    {
        path: 'login',
        loadComponent: () => import('./login/login.page').then(m => m.LoginPage),
    },
    {
        path: 'signup',
        loadComponent: () => import('./signup/signup.page').then(m => m.SignupPage),
    },
];