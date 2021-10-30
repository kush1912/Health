import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable,throwError  } from 'rxjs';
import { WeCareMappingService } from './we-care-mapping.service';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeCareService {
  constructor(private http: HttpClient, private mappingService: WeCareMappingService) { }

/*
* User Registration

registerUser(request: any): Observable<any> {
  const options = new HttpHeaders({ 'Content-Type': 'application/json' });
  const url = this.mappingService.getRegisterUserUrl();
  return this.http.post(url, request, { headers: options }).pipe(
    tap(data => console.log(data)),
    catchError(this.handleError));
}
*/

/*
* User Registration
*/
public registerUser(request:any): Observable<any> {
  const url = this.mappingService.getRegisterUserUrl();
  return this.http.post<any[]>(url,request);
}

/*
* User Login
*/
public loginUser(request:any): Observable<any> {
  const url = this.mappingService.getUserLoginUrl();
  console.log(url);
  return this.http.post<any[]>(url,request);
}

/*
* Coach Login
*/
public loginCoach(request:any): Observable<any> {
  const url = this.mappingService.getCoachLoginUrl();
  console.log(url);
  return this.http.post<any[]>(url,request);
}

/*
* Coach Registration
*/
public registerCoach(request:any): Observable<any> {
  const url = this.mappingService.getCoachRegisterUrl();
  console.log(url);
  return this.http.post<any[]>(url,request);
}

private handleError(err: HttpErrorResponse): Observable<any> {
  let errMsg = '';
  if (err.error instanceof Error) {
    // A client-side or network error occurred. Handle it accordingly.
    console.log('An error occurred:', err.error.message);
    errMsg = err.error.message;
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.log(`Backend returned code ${err.status}`);
    errMsg = err.error.status;
  }
  return throwError(errMsg);
}

}



