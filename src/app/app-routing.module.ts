import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { LoginInPageComponent } from './pages/login-in-page/login-in-page.component';
import { SelectMeditationCoursePageComponent } from './pages/select-meditation-course-page/select-meditation-course-page.component';
import { IndividualMeditationCoursePageComponent } from './pages/individual-meditation-course-page/individual-meditation-course-page.component';
import { IndividualMeditationPageComponent } from './pages/individual-meditation-page/individual-meditation-page.component';
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'signup', component: SignUpPageComponent },
  { path: 'login', component: LoginInPageComponent },
  {path:'all-meditations', component: SelectMeditationCoursePageComponent},
  {path: 'individual-meditation-course/:courseId', component: IndividualMeditationCoursePageComponent},
  {path: 'individual-meditation-page/:courseId', component: IndividualMeditationPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}
