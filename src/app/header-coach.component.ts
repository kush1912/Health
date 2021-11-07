import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-coach',
  template: `
    <header class="header">   
        <h3 class = "utl1">We Care</h3>
        <div>
            <ul>
                <li> 
                    <span (click)="coachViewProfile()"><i class="fas fa-user"></i>&nbsp;Profile</span>
                </li>
                <li > 
                    <span (click)="coachSchedules()"><i class="fas fa-calendar-alt"></i>&nbsp;My Schedules</span>
                </li>
                <li > 
                    <span><i class="fas fa-phone-alt"></i>&nbsp;Call us: 07692:222460</span>
                </li>
                <li > 
                    <span (click)="logout()"><i class="fas fa-sign-out-alt"></i>&nbsp;Logout</span>
                </li>
            </ul>
        </div>
    </header>
  `,
})
export class HeaderCoachComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  coachSchedules() {
      this.route.navigate(['/coachHome'],{skipLocationChange:true})
  }

  coachViewProfile() {
      this.route.navigate(['/coachProfile'],{skipLocationChange:true})
  }

  logout() {
      localStorage.setItem("coachId", '')
      this.route.navigate(['/home'],{skipLocationChange:true})
  }

}