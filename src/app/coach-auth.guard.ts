import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CoachAuthGuard implements CanActivate {
  constructor(private route:Router){}
  isCoachAuth!:string;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.isCoachAuth=String(localStorage.getItem('isCoachAuth'));
    debugger;
    if(this.isCoachAuth=="true"){
      console.log("Coach is allowed!");
      return true;
    }
    else{
      window.alert("You don't have permission to view this page");
      this.route.navigate(['/home']);
      return false;
    }
  }
  
}
