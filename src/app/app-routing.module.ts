import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { LoginInPageComponent } from './pages/login-in-page/login-in-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'signup', component: SignUpPageComponent },
  { path: 'login', component: LoginInPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
