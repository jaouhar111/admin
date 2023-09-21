import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError,filter,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  private readonly url="http://localhost:9000/api/users";
  constructor(private http:HttpClient) { }

  public getStudent():Observable<any>
  {
    
    return this.http.get(this.url).pipe(
      tap(student=>console.log("student",student)),
      catchError(this.handleError)
    )
  };

  
  public getTeacher():Observable<any>
  {
    
    return this.http.get(this.url)
     
        
       
  }
  public getonestudent(id:any):Observable<any>
  {
    return this.http.get("http://localhost:9000/api/users/"+id).pipe(
        tap(student=>console.log("student",student)),
        catchError(this.handleError)
    );
  }

  ajStudent(
    name: String,
    register: String,
    genre: String,
    photo: String,
    dateN: Date,
    adresse: String,
    role: String,
    father: String,
    profession: String,
    nationalid: String,
    education: String,
    mobile: String,
    email: String,
  ): Observable<any> {
    const studentData = {
      name,
      register,
      genre,
      photo,
      dateN,
      adresse,
      role,
      father,
      profession,
      nationalid,
      education,
      mobile,
      email
    };

    // Return the full HTTP response with the created student data
    return this.http.post(this.url, studentData, { observe: 'response' }).pipe(
      catchError(this.handleError)
    );
  }

  addUser(user: any): Observable<any> {
    return this.http.post(this.url, user);
  }
  deleteUser(userId: String): Observable<any> {
    const apiUrl = `http://localhost:9000/api/users/${userId}`;
    return this.http.delete(apiUrl);
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
