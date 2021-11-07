import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachHomeComponent } from './coach-home.component';
import { CoachProfileComponent } from './coach-profile/coach-profile.component';

const coachRoutes: Routes = [
    {path:"coachHome", component: CoachHomeComponent},
    {path:"coachProfile", component: CoachProfileComponent},
];
@NgModule({
    imports: [RouterModule.forChild(coachRoutes)],
    exports: [RouterModule]
})
export class CoachRoutingModule { }