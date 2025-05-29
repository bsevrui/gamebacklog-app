import { Routes } from "@angular/router";
import { guestGuard } from "src/app/core/guards/guest.guard";

export const authRoutes: Routes = [
    {
        path: '',
        canActivate: [guestGuard],
        loadComponent: () => import('./login/login.page').then(m => m.LoginPage),
    },
    {
        path: 'login',
        canActivate: [guestGuard],
        loadComponent: () => import('./login/login.page').then(m => m.LoginPage),
    },
    {
        path: 'signup',
        canActivate: [guestGuard],
        loadComponent: () => import('./signup/signup.page').then(m => m.SignupPage),
    },
];