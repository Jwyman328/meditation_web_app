import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { LoginInPageComponent } from './pages/login-in-page/login-in-page.component';
import { SelectMeditationCoursePageComponent } from './pages/select-meditation-course-page/select-meditation-course-page.component';
import { IndividualMeditationCoursePageComponent } from './pages/individual-meditation-course-page/individual-meditation-course-page.component';
import { IndividualMeditationPageComponent } from './pages/individual-meditation-page/individual-meditation-page.component';
import { MentalHealthComponent } from './pages/mental-health/mental-health.component';
import { MentalHealthShowDataComponent } from './pages/mental-health-show-data/mental-health-show-data.component';
import { PastJournalsComponent } from './pages/past-journals/past-journals.component';
import { AuthGuard } from './services/auth-guards/user-authenticated-guard';

const routes: Routes = [
  { path: '', component: HomepageComponent,canActivate:[AuthGuard] },//, 
  { path: 'signup', component: SignUpPageComponent },
  { path: 'login', component: LoginInPageComponent },
  { path: 'all-meditations', component: SelectMeditationCoursePageComponent,canActivate:[AuthGuard] },
  {
    path: 'individual-meditation-course/:courseId',
    component: IndividualMeditationCoursePageComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'individual-meditation-page/:courseId/:meditationTitle',
    component: IndividualMeditationPageComponent,
    canActivate:[AuthGuard]
  },
  { path: 'mental-health', component: MentalHealthShowDataComponent,canActivate:[AuthGuard] },
  { path: 'create-journal-entry', component: MentalHealthComponent ,canActivate:[AuthGuard]},
  { path: 'past-journals', component: PastJournalsComponent,canActivate:[AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule],
})
export class AppRoutingModule {}
