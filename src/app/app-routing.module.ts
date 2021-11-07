import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { CoachSignupComponent } from './coach-signup/coach-signup.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CoachLoginComponent } from './coach-login/coach-login.component';

const routes: Routes = [
  {path:"home", component: HomeComponent },
  {path:"coachSignup", component: CoachSignupComponent },
  {path:"coachLogin", component: CoachLoginComponent },
  {path:"userSignup", component: UserSignupComponent},
  {path:"userLogin", component: UserLoginComponent},
  {path:'users', loadChildren: () => import('./user-home/user.module').then(m => m.UserModule) },
  {path:'coaches', loadChildren: () => import('./coach-home/coach.module').then(m => m.CoachModule) },
  { path: "", pathMatch: "full", redirectTo: "/home" },
  {path:"**",pathMatch:"full",redirectTo:"/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
