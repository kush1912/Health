import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { WeCareService } from '../../we-care.service';
import { Router } from '@angular/router';
import { DataSharingService } from '../../Shared/data-sharing.service';
import { validateDoa } from 'src/app/Shared/custom-validator';

@Component({
  selector: 'app-user-appointment',
  templateUrl: './user-appointment.component.html',
  styleUrls: ['./user-appointment.component.css']
})
export class UserAppointmentComponent implements OnInit {

  constructor(private route: Router,
    private service: WeCareService,
    private dataService:DataSharingService,
    private formBuilder:FormBuilder) { }

    loading: boolean = true
    UserId: string = String(localStorage.getItem("userId"))
    data: any = ""

    ngOnInit() {
        this.service.getUserBookings(this.UserId).subscribe(
            (data: any) => {
                this.data = data.data['user_appointments']
                this.loading = false    
            },
            err => console.log(err)
        )
    }

    rescheduleAppointment(bookingId: string) {
        localStorage.setItem("bookingId", bookingId)
        //this.dataService.setBookingId(bookingId);
        this.route.navigate(['/users/rescheduleAppointment'],{skipLocationChange:true})
    }

    deleteAppointment(bookingId: string) {
        const flag: boolean = confirm("Do you really want to delete the appointment?")

        if (flag) {
            this.service.deleteBookings(bookingId).subscribe(
                data => this.ngOnInit(), //location.reload(),
                err => console.log(err)
            )
        }
    }
  goBack() {
      this.route.navigate(['/users/userHome'],{skipLocationChange:true})
  }
}
