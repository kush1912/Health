import { Component, OnInit } from '@angular/core';
import { WeCareService } from '../we-care.service';
import { Router } from '@angular/router';
import { DataSharingService } from '../Shared/data-sharing.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  coaches:any[]=[]
  constructor(private route: Router,
    private service: WeCareService,
    private dataService:DataSharingService) { }

  ngOnInit(): void {
    this.service.getAllCoaches().subscribe(
      data =>{
        this.coaches = data;
        console.log(this.coaches);
      },
      err =>{
        console.log(err);
      }
    )
  }

  bookAppointment(coachId:string){
    this.dataService.setCoachId(coachId);
    this.route.navigate(['\bookAppointment']);
  }

}
