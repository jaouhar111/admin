import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError,tap } from 'rxjs';
import {  catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private readonly url="http://localhost:9000/api/matiere";
  constructor(private http:HttpClient) { }

  loadExternalScript() {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js';
    script.async = true;
    script.onload = () => {
      // Script has loaded, you can now use its functionality
      // Initialize any required functionality from the script
    };
    document.head.appendChild(script);
  }
  removeExternalScript() {
    // If needed, remove the script element from the DOM when the component is destroyed
    const script = document.querySelector('[src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"]');
    if (script) {
      script.remove();
    }
  }
  ajMatiere(
    name: String,
    note: String,
 
  ): Observable<any> {
    const studentData = {
      name,
      note,
    
    };

    // Return the full HTTP response with the created student data
    return this.http.post(this.url, studentData, { observe: 'response' }).pipe(
      catchError(this.handleError)
    );
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
  public getMatiere(id:String):Observable<any>
  {
    return this.http.get('http://localhost:9000/api/matiere/'+id).pipe(
        //tap(matiere=>console.log("matiere",matiere)),
        catchError(this.handleError)
    );
  }
}
