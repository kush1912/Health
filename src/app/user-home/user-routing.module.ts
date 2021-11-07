import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { UserAppointmentComponent } from './user-appointment/user-appointment.component';
import { RescheduleAppointmentComponent } from './reschedule-appointment/reschedule-appointment.component';
import { UserAuthGuard } from '../user-auth.guard';

const userRoutes: Routes = [
    { path: "userHome", component: UserHomeComponent,canActivate:[UserAuthGuard]},  
    { path: "userProfile", component: UserProfileComponent, canActivate:[UserAuthGuard]},
    { path: "bookAppointment", component: BookAppointmentComponent, canActivate:[UserAuthGuard] },
    { path: "userAppointments", component: UserAppointmentComponent, canActivate:[UserAuthGuard] },
    { path: "rescheduleAppointment", component: RescheduleAppointmentComponent, canActivate:[UserAuthGuard] },
    { path: "userViewProfile", component: UserProfileComponent, canActivate:[UserAuthGuard] },
];
@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }