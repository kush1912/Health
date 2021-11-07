import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  constructor(private route:Router){}
  isAuthAuth!:string;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.isAuthAuth=String(localStorage.getItem('isCoachAuth'));
      debugger;
      if(this.isAuthAuth=="true"){
        console.log("User is allowed!");
        return true;
      }
      else{
        window.alert("You don't have permission to view this page");
        this.route.navigate(['/home']);
        return false;
      }
  }
  
}
