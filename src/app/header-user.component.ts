import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-user',
  template: `
  <header class="header">   
        <h3 class = "utl1">We Care</h3>
        <div>
            <ul>
                <li> 
                    <span (click)="userViewProfile()"><i class="fas fa-user"></i>&nbsp;Profile</span>
                </li>
                <li > 
                    <span (click)="userAppointments()"><i class="fas fa-calendar-alt"></i>&nbsp;My Schedules</span>
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
export class HeaderUserComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  userViewProfile() {
      this.route.navigate(['/userProfile'],{skipLocationChange:true})
  }

  userAppointments() {
      this.route.navigate(['/userAppointments'],{skipLocationChange:true})
  }

  logout() {
      localStorage.setItem("userId", '')
      localStorage.setItem("coachId", '')
      localStorage.setItem("bookingId", '')
      this.route.navigate(['/home'],{skipLocationChange:true})
  }

}