import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { WeCareService } from '../we-care.service';
import { validateDoa, validateDob,validatePhone, validatePincode } from '../Shared/custom-validator';
@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  UserId:string="";

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private service: WeCareService
  ) { }

  ngOnInit(): void {
  }

  userRegistrationForm = this.formBuilder.group({
    Name:['',[Validators.required]],
    Password:['',[Validators.required]], 
    DateOfBirth:['',[validateDob]],
    Gender: ['',[Validators.required]],
    MobileNumber: ['',[validatePhone,Validators.required]],
    Email:['',[Validators.email,Validators.required]], 
    PinCode:['',[validatePincode]], 
    City:['',[Validators.required]], 
    State:['',[Validators.required]],
    Country:['',[Validators.required]]
  })

  handleSubmit(){
    this.service.registerUser(this.userRegistrationForm.value).subscribe(
      result =>{
        if(result){
          this.UserId=result['message'];
        }
      },
      err =>{
        console.log(err);
      }
    )
  }
  
  handleUserLogin(){
    this.route.navigate(['/userLogin']);
  }
}
