import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BackgroundImageComponent } from './components/background-image/background-image.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { MainNavBarComponent } from './components/nav-bars/main-nav-bar/main-nav-bar.component';
import { NavLinkComponent } from './components/nav-bars/nav-link/nav-link.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { AuthCardComponent } from './components/auth-card/auth-card.component';
import { SignupFormComponent } from './components/forms/signup-form/signup-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormButtonComponent } from './components/buttons/form-button/form-button.component';
import { LoginInPageComponent } from './pages/login-in-page/login-in-page.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { NavigateToPageButtonComponent } from './components/buttons/navigate-to-page-button/navigate-to-page-button.component';
import { SelectMeditationCoursePageComponent } from './pages/select-meditation-course-page/select-meditation-course-page.component';
import { MeditationCourseCardComponent } from './components/meditation-course-card/meditation-course-card.component';
import { IndividualMeditationCoursePageComponent } from './pages/individual-meditation-course-page/individual-meditation-course-page.component';
import { IndividualMeditationPageComponent } from './pages/individual-meditation-page/individual-meditation-page.component';
import { IndividualMeditationClickableRowComponent } from './components/individual-meditation-clickable-row/individual-meditation-clickable-row.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BackgroundImageComponent,
    PageHeaderComponent,
    MainNavBarComponent,
    NavLinkComponent,
    SignUpPageComponent,
    AuthCardComponent,
    SignupFormComponent,
    FormButtonComponent,
    LoginInPageComponent,
    LoginFormComponent,
    NavigateToPageButtonComponent,
    SelectMeditationCoursePageComponent,
    MeditationCourseCardComponent,
    IndividualMeditationCoursePageComponent,
    IndividualMeditationPageComponent,
    IndividualMeditationClickableRowComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
