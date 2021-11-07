import { NgModule,CUSTOM_ELEMENTS_SCHEMA }   from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { CoachHomeComponent } from './coach-home.component';
import { CoachProfileComponent } from './coach-profile/coach-profile.component';
import { CoachRoutingModule } from './coach-routing.module';

@NgModule({
  imports: [
    CommonModule, 
    CoachRoutingModule,
    HttpClientModule,
    ReactiveFormsModule ],
  declarations: [
    CoachHomeComponent,
    CoachProfileComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CoachModule { }