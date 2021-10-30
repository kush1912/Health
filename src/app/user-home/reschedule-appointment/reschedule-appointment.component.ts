import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { WeCareService } from '../../we-care.service';
import { Router } from '@angular/router';
import { DataSharingService } from '../../Shared/data-sharing.service';
import { validateDoa } from 'src/app/Shared/custom-validator';

@Component({
  selector: 'app-reschedule-appointment',
  templateUrl: './reschedule-appointment.component.html',
  styleUrls: ['./reschedule-appointment.component.css']
})
export class RescheduleAppointmentComponent implements OnInit {

  constructor(private route: Router,
    private service: WeCareService,
    private dataService:DataSharingService,
    private formBuilder:FormBuilder) { }
  
  ngOnInit(): void {
  }

  booked: boolean = false

    appointmentForm: FormGroup = this.formBuilder.group({
        appointmentDate: ['', [validateDoa, Validators.required]],
        slot: ['', Validators.required]
    })

    handleSubmit() {
        event?.preventDefault()
        const userId = this.dataService.getUserId();
        const coachId = this.dataService.getCoachId();
        const bookingId =this.dataService.getBookingId();
        this.service.rescheduleBookings(this.appointmentForm.value, bookingId ).subscribe(
            data => this.booked = true,
            err => console.log(err)
        )
    }

    goBack() {
        this.route.navigate(['/userHome'])
    }
}
