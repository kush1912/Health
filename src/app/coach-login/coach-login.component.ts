import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { WeCareService } from '../we-care.service';
import { DataSharingService } from '../Shared/data-sharing.service';

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
    private service: WeCareService,
    private dataService:DataSharingService
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
          //this.dataService.setCoachId(this.coachLoginForm.value.CoachId);
          localStorage.setItem("coachId", this.coachLoginForm.value.CoachId);
          this.route.navigate(['/coaches/coachHome'],{skipLocationChange:true});  
        }
      },
      error =>{
        this.isAuthenticated=false;
      }
    );
  }
}
