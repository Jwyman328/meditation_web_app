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
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MentalHealthComponent } from './pages/mental-health/mental-health.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ChooseEmotionComponent } from './pages/mental-health/local-components/choose-emotion/choose-emotion.component';
import { FormsModule } from '@angular/forms';
import { MentalHealthShowDataComponent } from './pages/mental-health-show-data/mental-health-show-data.component';
import { BeautifulChartsModule } from 'ngx-beautiful-charts';
import { SuggestedMeditationComponent } from './components/suggested-meditation/suggested-meditation.component';
import { PastJournalsComponent } from './pages/past-journals/past-journals.component';
import { ErrorMessageComponent } from './components/messages/error-message/error-message.component';
import { MobileHeaderButtonComponent } from './components/buttons/mobile-header-button/mobile-header-button.component';
import { MeditationBreatheCircleComponent } from './components/meditation-breathe-circle/meditation-breathe-circle.component';
import { GuestUserInfoComponent } from './components/guest-user-info/guest-user-info.component';
import { SubmitEmotionButtonComponent } from './components/buttons/submit-emotion-button/submit-emotion-button.component';
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
    SpinnerComponent,
    MentalHealthComponent,
    ChooseEmotionComponent,
    MentalHealthShowDataComponent,
    SuggestedMeditationComponent,
    PastJournalsComponent,
    ErrorMessageComponent,
    MobileHeaderButtonComponent,
    MeditationBreatheCircleComponent,
    GuestUserInfoComponent,
    SubmitEmotionButtonComponent,
    
    
  ],
  imports: [
BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    BeautifulChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
