import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { WeCareService } from '../../we-care.service';
import { Router } from '@angular/router';
import { DataSharingService } from '../../Shared/data-sharing.service';
import { validateDoa } from 'src/app/Shared/custom-validator';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private service: WeCareService,
    private dataService:DataSharingService) { }
  data: any = ""
  userId: string = String(localStorage.getItem("userId"))

  ngOnInit() {
      this.service.getUserProfile(this.userId).subscribe(
          (data: any) => this.data = data.data['user_details'],
          err => console.log(err)
      )
  }

  goBack() {
      this.route.navigate(['/userHome'],{skipLocationChange:true})
  }

}
