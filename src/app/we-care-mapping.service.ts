import { Injectable,Optional,Inject } from "@angular/core";

@Injectable()

export class WeCareMappingService{
    // private readonly BASE_URL = '';
    private readonly BASE_URL = '';
    private readonly REG_USER = 'users';
    private readonly LOGIN_USER = 'users/login';
    private readonly REG_COACH = 'coaches';
    private readonly LOGIN_COACH ='coaches/login';
    private readonly COACH_PROFILE='coaches/';
    private readonly USER_PROFILE='users/';
    private readonly ALL_COACHES='coaches/all'
    private readonly COACH_BOOKINGS='Coaches/booking/';
    private readonly USER_BOOKINGS='users/booking/';
    private readonly MAKE_BOOKING='users/booking/';
    private readonly DELETE_BOOKING='booking/';
    private readonly RESCHEDULE_BOOKING='booking/';

    constructor(){}



/*
* Reschedule Booking
*/
public getRescheduleBookingsUrl(bookingId:string): string{
  console.log(bookingId);
  return this.BASE_URL + this.RESCHEDULE_BOOKING + bookingId;
}

    
/*
* Delete Booking
*/
public getDeleteBookingsUrl(bookingId:string): string{
  return this.BASE_URL + this.DELETE_BOOKING + bookingId;
}


/*
* User Bookings
*/
public getUserBookingsUrl(userId:string): string{
  return this.BASE_URL + this.USER_BOOKINGS + userId;
}


/*
* Coach Bookings
*/
public getCoachBookingsUrl(coachId:string): string{
  return this.BASE_URL + this.COACH_BOOKINGS + coachId;
}

/*
* All Coaches Booking
*/
public getAllCoachesUrl(): string{
  return this.BASE_URL + this.ALL_COACHES;
}

    
/*
* Make Booking
*/
public getMakeBookingsUrl(userId:string, coachId:String): string{
  return this.BASE_URL + this.MAKE_BOOKING + userId +"/"+ coachId;
}

/*
* User Profile
*/
public getUserProfileUrl(userId:String): string{
  return this.BASE_URL + this.USER_PROFILE + userId;
}


/*
* Coach Profile
*/
public getCoachProfileUrl(coachId:String): string{
  return this.BASE_URL + this.COACH_PROFILE + coachId;
}


/*
* User Registration
*/
public getRegisterUserUrl(): string{
    return this.BASE_URL + this.REG_USER;
  }

/*
* User Registration
*/
public getUserLoginUrl(): string{
    return this.BASE_URL + this.LOGIN_USER;
  }

/*
* Coach Registration
*/
public getCoachRegisterUrl(): string{
  return this.BASE_URL + this.REG_COACH;
}

/*
* Coach Login
*/
public getCoachLoginUrl(): string{
  return this.BASE_URL + this.LOGIN_COACH;
}
  
}

