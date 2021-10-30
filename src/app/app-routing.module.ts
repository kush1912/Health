import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { CoachSignupComponent } from './coach-signup/coach-signup.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CoachLoginComponent } from './coach-login/coach-login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { CoachHomeComponent } from './coach-home/coach-home.component';
import { CoachProfileComponent } from './coach-home/coach-profile/coach-profile.component';
import { UserProfileComponent } from './user-home/user-profile/user-profile.component';
import { BookAppointmentComponent } from './user-home/book-appointment/book-appointment.component';
import { UserAppointmentComponent } from './user-home/user-appointment/user-appointment.component';
import { RescheduleAppointmentComponent } from './user-home/reschedule-appointment/reschedule-appointment.component';

const routes: Routes = [
  {path:"home", component: HomeComponent },
  {path:"coachSignup", component: CoachSignupComponent },
  {path:"coachLogin", component: CoachLoginComponent },
  {path:"userSignup", component: UserSignupComponent},
  {path:"userLogin", component: UserLoginComponent},
  {path:"userHome", component: UserHomeComponent},
  {path:"coachHome", component: CoachHomeComponent},
  {path:"coachProfile", component: CoachProfileComponent},
  {path:"userProfile", component: UserProfileComponent},
  { path: "bookAppointment", component: BookAppointmentComponent },
  { path: "userAppointments", component: UserAppointmentComponent },
  { path: "rescheduleAppointment", component: RescheduleAppointmentComponent },
  { path: "userViewProfile", component: UserProfileComponent },
  { path: "", pathMatch: "full", redirectTo: "/home" },
  {path:"",pathMatch:"full",redirectTo:"/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
