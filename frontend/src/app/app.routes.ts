import { Routes } from '@angular/router';
import { LandingPage } from './features/pages/landing-page/landing-page.component';
import { LoginPage } from './features/pages/login-page/login-page.component';
import { SignupPage } from './features/pages/signup-page/signup-page.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPage,
        title: 'Landing Page'
    },
    {
        path: 'login',
        component: LoginPage,
        title: 'Login Page'
    },
    {
        path: 'signup',
        component: SignupPage,
        title: 'Signup page'
    }
];
