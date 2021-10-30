import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeCareService } from '../../we-care.service';
@Component({
  selector: 'app-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.css']
})
export class CoachProfileComponent implements OnInit {
  coachId: string = String(localStorage.getItem("coachId"))
  data: any = ""
  constructor(private route: Router,
              private service: WeCareService) { }

  ngOnInit(): void {
    this.service.getCoachProfile(this.coachId).subscribe(
      data => {
          this.data = data
      },
      err => console.log(err)
  )
  }

}
