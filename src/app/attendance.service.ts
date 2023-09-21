import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private apiUrl = 'http://localhost:9000/api/attendance'; 
  constructor(private http:HttpClient) { }

  // Create a new attendance record
  createAttendance(attendanceData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, attendanceData);
  }

  // Get all attendance records
  getAllAttendance(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`).pipe(
      tap(student=>console.log("all",student)),
      //catchError(this.handleError)
    )
  }
}
