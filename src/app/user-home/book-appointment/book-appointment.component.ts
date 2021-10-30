import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { WeCareService } from '../../we-care.service';
import { Router } from '@angular/router';
import { DataSharingService } from '../../Shared/data-sharing.service';
import { validateDoa } from 'src/app/Shared/custom-validator';
@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  booked:boolean=false;
  constructor(private route: Router,
    private service: WeCareService,
    private dataService:DataSharingService,
    private formBuilder:FormBuilder) { }
  
    ngOnInit(): void {
  }

  appointmentForm:FormGroup =this.formBuilder.group({
    DateOfAppointment:['',[validateDoa, Validators.required]],
    Slot:['',[Validators.required]]
  })

  handleSubmit(){
    const UserId = String(localStorage.getItem("userId"));
    //this.dataService.getUserId();
    const CoachId = String(localStorage.getItem("coachId"));
    //this.dataService.getCoachId();
    this.service.makeBookings(this.appointmentForm.value,UserId,CoachId).subscribe(
      data =>{
        console.log(data);
        this.booked =true;
      },
      err =>{
        console.log(err);
      }
    )
  }

  goBack(){
    this.route.navigate(['/userHome']);
  }

}
