import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  private readonly url="http://localhost:9000/api/classes";
  constructor(private http:HttpClient) { }

  public getClasse():Observable<any>
  {
    return this.http.get(this.url).pipe(
        tap(classe=>console.log("classe",classe)),
        catchError(this.handleError)
    );
  }

  public ajClasse(name: String, prof:String):Observable<any>{
    return this.http.post(this.url,{
      name,prof
    }).pipe(
      catchError(this.handleError)
    )
  }

  updateClasseroom(classroomId: String, students: String): Observable<any> {
    const requestBody = { students };

    // Make a PUT request to the updated classroom update API endpoint
    return this.http.put("http://localhost:9000/api/classes/"+classroomId, requestBody);
    
  }
  updateClassroomAndAddMatiere(classroomId: String, matiereId: String): Observable<any> {
    const url = "http://localhost:9000/api/classes/"+classroomId;
    const requestBody = { matiereId };
    return this.http.patch(url, requestBody);
  }

  getClassroom(classroomId: String): Observable<any> {
    const url = 'http://localhost:9000/api/classes/'+classroomId; // Adjust the URL structure

    return this.http.get(url);
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
