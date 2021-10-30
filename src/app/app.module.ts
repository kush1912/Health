import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoachSignupComponent } from './coach-signup/coach-signup.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CoachLoginComponent } from './coach-login/coach-login.component';
import { WeCareMappingService } from './we-care-mapping.service';
import { WeCareService } from './we-care.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CoachHomeComponent } from './coach-home/coach-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { CoachProfileComponent } from './coach-home/coach-profile/coach-profile.component';
import { UserProfileComponent } from './user-home/user-profile/user-profile.component';
import { BookAppointmentComponent } from './user-home/book-appointment/book-appointment.component';
import { UserAppointmentComponent } from './user-home/user-appointment/user-appointment.component';
import { RescheduleAppointmentComponent } from './user-home/reschedule-appointment/reschedule-appointment.component';
import { HeaderCoachComponent } from './header-coach.component';
import { HeaderUserComponent } from './header-user.component';
import { HeaderComponent } from './header.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoachSignupComponent,
    UserSignupComponent,
    UserLoginComponent,
    CoachLoginComponent,
    CoachHomeComponent,
    UserHomeComponent,
    CoachProfileComponent,
    UserProfileComponent,
    BookAppointmentComponent,
    UserAppointmentComponent,
    RescheduleAppointmentComponent,
    HeaderUserComponent,
    HeaderCoachComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    WeCareService,
    WeCareMappingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
