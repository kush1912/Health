import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
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

import { HeaderCoachComponent } from './header-coach.component';
import { HeaderUserComponent } from './header-user.component';
import { HeaderComponent } from './header.component';
import { UserModule } from './user-home/user.module';
import { UserRoutingModule } from './user-home/user-routing.module';
import { CoachModule } from './coach-home/coach.module';
import { CoachRoutingModule } from './coach-home/coach-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoachSignupComponent,
    UserSignupComponent,
    UserLoginComponent,
    CoachLoginComponent,
    HeaderUserComponent,
    HeaderCoachComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    UserModule,
    UserRoutingModule,
    CoachModule,
    CoachRoutingModule
  ],
  providers: [
    WeCareService,
    WeCareMappingService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
