import { Injectable,Optional,Inject } from "@angular/core";

@Injectable()

export class WeCareMappingService{
    private readonly BASE_URL = 'http://localhost:7000';
    private readonly REG_USER = '/users';
    private readonly LOGIN_USER = '/users/login';
    private readonly REG_COACH = '/coaches';
    private readonly LOGIN_COACH ='/coaches/login';

    constructor(){}

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

