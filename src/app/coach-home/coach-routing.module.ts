import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachAuthGuard } from '../coach-auth.guard';
import { CoachHomeComponent } from './coach-home.component';
import { CoachProfileComponent } from './coach-profile/coach-profile.component';

const coachRoutes: Routes = [
    {path:"coachHome", component: CoachHomeComponent, canActivate:[CoachAuthGuard]},
    {path:"coachProfile", component: CoachProfileComponent, canActivate:[CoachAuthGuard]},
];
@NgModule({
    imports: [RouterModule.forChild(coachRoutes)],
    exports: [RouterModule]
})
export class CoachRoutingModule { }