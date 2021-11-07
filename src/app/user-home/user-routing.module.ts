import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { UserAppointmentComponent } from './user-appointment/user-appointment.component';
import { RescheduleAppointmentComponent } from './reschedule-appointment/reschedule-appointment.component';

const userRoutes: Routes = [
    { path: "userHome", component: UserHomeComponent},  
    { path: "userProfile", component: UserProfileComponent},
    { path: "bookAppointment", component: BookAppointmentComponent },
    { path: "userAppointments", component: UserAppointmentComponent },
    { path: "rescheduleAppointment", component: RescheduleAppointmentComponent },
    { path: "userViewProfile", component: UserProfileComponent },
];
@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }