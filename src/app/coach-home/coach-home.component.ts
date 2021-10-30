import { Component, Input, OnInit } from '@angular/core';
import { WeCareService } from '../we-care.service';
import { Router } from '@angular/router';
import { DataSharingService } from '../Shared/data-sharing.service';

@Component({
  selector: 'app-coach-home',
  templateUrl: './coach-home.component.html',
  styleUrls: ['./coach-home.component.css']
})
export class CoachHomeComponent implements OnInit {

  coachId:string=String(localStorage.getItem('coachId'));
  bookings: any[] = [];

  constructor(private route: Router,
              private service: WeCareService,
              private dataService:DataSharingService){ }

  ngOnInit(): void {
    //this.coachId = this.dataService.getCoachId();
    this.service.getCoachBookings(this.coachId).subscribe(
      (data:any) => this.bookings = data.data['coach_appointments'],
      error => console.log(error)
    )
  }

}
