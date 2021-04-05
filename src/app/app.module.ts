import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoachSignupComponent } from './coach-signup/coach-signup.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CoachLoginComponent } from './coach-login/coach-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoachSignupComponent,
    UserSignupComponent,
    UserLoginComponent,
    CoachLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
