import { NgModule,CUSTOM_ELEMENTS_SCHEMA }   from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { UserHomeComponent } from './user-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { UserAppointmentComponent } from './user-appointment/user-appointment.component';
import { RescheduleAppointmentComponent } from './reschedule-appointment/reschedule-appointment.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    CommonModule, 
    UserRoutingModule,
    HttpClientModule,
    ReactiveFormsModule ],
  declarations: [  
    UserHomeComponent,
    UserProfileComponent,
    BookAppointmentComponent,
    UserAppointmentComponent,
    RescheduleAppointmentComponent,],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class UserModule { }