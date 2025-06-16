import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin';
import { PasswordComponent } from './password/password';

export const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'password', component: PasswordComponent }
];
