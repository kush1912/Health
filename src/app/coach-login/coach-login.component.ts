import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { WeCareService } from '../we-care.service';

@Component({
  selector: 'app-coach-login',
  templateUrl: './coach-login.component.html',
  styleUrls: ['./coach-login.component.css']
})
export class CoachLoginComponent implements OnInit {
  isAuthenticated:boolean=true;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private service: WeCareService
  ) { }

  ngOnInit(): void {
  }


  coachLoginForm = this.formBuilder.group({
    CoachId: ['',Validators.required],
    Password: ['',[Validators.required]]
  });

  public handleSubmit(){
    this.service.loginCoach(this.coachLoginForm.value).subscribe(
      result => {
        if(result){
          this.isAuthenticated=true;
          //LocalStorage
          this.route.navigate(['/coachHome']);  
        }
      },
      error =>{
        this.isAuthenticated=false;
      }
    );
  }
}
