import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'auth', loadChildren: './instagram-authentication/instagram-authentication.module#InstagramAuthenticationModule' }
];

export const Router: ModuleWithProviders = RouterModule.forRoot(routes);