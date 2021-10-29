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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    WeCareService,
    WeCareMappingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
