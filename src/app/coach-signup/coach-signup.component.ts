import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { WeCareService } from '../we-care.service';
import { validateDob,validatePhone } from '../Shared/custom-validator';
@Component({
  selector: 'app-coach-signup',
  templateUrl: './coach-signup.component.html',
  styleUrls: ['./coach-signup.component.css']
})
export class CoachSignupComponent implements OnInit {
  CoachId:string="";

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private service: WeCareService
  ) { }

  ngOnInit(): void {
  }

  coachRegistrationForm = this.formBuilder.group({
    Name: ['',Validators.required],
    Password: ['',[Validators.required, Validators.maxLength(10), Validators.minLength(5)]],
    DateOfBirth: ['',[validateDob,Validators.required]],
    Gender: ['',[Validators.required]],
    MobileNumber: ['',[validatePhone,Validators.required]], 
    Speciality: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]]
  });

  handleSubmit(){
    this.service.registerCoach(this.coachRegistrationForm.value).subscribe(
      result =>{
        if(result){
          this.CoachId=result["message"];
        }
      },
      err =>{
        console.log(err);
      }
    )
  }

  handleCoachLogin(){
    this.route.navigate(['/coachLogin']);
  }
}
