import { Component, OnInit } from '@angular/core';
import { WeCareService } from '../we-care.service';
import { Router } from '@angular/router';
import { DataSharingService } from '../Shared/data-sharing.service';
import { HeaderUserComponent } from '../header-user.component';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  coaches:any[]=[]
  UserId:string=String(localStorage.getItem('userId'));
  constructor(private route: Router,
    private service: WeCareService,
    private dataService:DataSharingService) { }

  ngOnInit(): void {
    this.service.getAllCoaches().subscribe(
      data =>{
        this.coaches = data.data['all_coaches'];
        console.log(this.coaches);
      },
      err =>{
        console.log(err);
      }
    )
  }

  bookAppointment(coachId:string){
    console.log(coachId);
    localStorage.setItem("coachId",coachId);
    //this.dataService.setCoachId(coachId);
    this.route.navigate(['/users/bookAppointment']);
  }

}
