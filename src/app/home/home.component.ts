import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router) { }

  handleCoachLogin() {
    this.route.navigate(['/coachLogin'])
  }

  handleCoachSignup() {
    this.route.navigate(['/coachSignup'])
  }

  handleUserLogin() {
    this.route.navigate(['/userLogin'])
  }

  handleUserSignup() {
    this.route.navigate(['/userSignup'])
  }
  ngOnInit(): void {
  }

}
