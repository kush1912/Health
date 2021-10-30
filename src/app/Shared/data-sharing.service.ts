import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  coachId:string="";
  userId:string="";
  bookingId:string="";
  constructor() { }
  
  setCoachId(data:string){
    this.coachId=data;
  }
  setUserId(data:string){
    this.userId=data;
  }

  getCoachId(){
    return this.coachId;
  }
  
  getUserId(){
    return this.userId;
  }
  setBookingId(data:string){
    this.bookingId = data;
  }
  
  getBookingId(){
    return this.bookingId;
  }
}
