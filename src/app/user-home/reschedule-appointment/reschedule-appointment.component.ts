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
  bookingId:string="";
    appointmentForm: FormGroup = this.formBuilder.group({
      DateOfAppointment: ['', [validateDoa, Validators.required]],
      Slot: ['', Validators.required]
    })

    handleSubmit() {
        event?.preventDefault()
        const userId = String(localStorage.getItem('userId')); //this.dataService.getUserId();
        const coachId = String(localStorage.getItem('coachId')); //this.dataService.getCoachId();
        //this.dataService.getBookingId();
        const bookingId =localStorage.getItem('bookingId');
        this.service.rescheduleBookings(this.appointmentForm.value, this.bookingId ).subscribe(
            data => this.booked = true,
            err => console.log(err)
        )
    }

    goBack() {
        this.route.navigate(['/userHome'])
    }
}
