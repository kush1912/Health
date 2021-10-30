import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { WeCareService } from '../we-care.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  isAuthenticated:boolean=true;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private service: WeCareService
  ) { }

  ngOnInit(): void {
  }

  userLoginForm = this.formBuilder.group({
    UserId: ['',Validators.required],
    Password: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
  });

  public handleSubmit(){
    this.service.loginUser(this.userLoginForm.value).subscribe(
      result => {
        this.isAuthenticated=true;
        //LocalStorage
        this.route.navigate(['/userHome']);
      },
      error =>{
        this.isAuthenticated=false;
      }
    );
  }
}