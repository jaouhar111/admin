import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/app/attendance.service';
import { ClasseService } from 'src/app/classe.service';
import { UserServiceService } from 'src/app/user-service.service';
import { IUser } from '../user';

@Component({
  selector: 'app-att-emp',
  templateUrl: './att-emp.component.html',
  styleUrls: ['./att-emp.component.css']
})
export class AttEmpComponent implements OnInit {
  employees: any[] = [];
  selectedStatus: { [employeeId: string]: string } = {};
  constructor(private Cla:ClasseService,private att:AttendanceService,private userService:UserServiceService){}
  ngOnInit(): void {
    this.userService.getStudent()

  .subscribe((data: IUser[]) => {
    // Filter users by role 'student'
    this.employees = data.filter(user => user.role !== 'Student');
    console.log(this.employees);
    //this.filteredList=[...this.employees]
  });
  }
  onAdd() {
    // console.log('Before loop: selectedStatus', this.selectedStatus);
 
 for (const studentId of Object.keys(this.selectedStatus)) {
 
   const status = this.selectedStatus[studentId];
 
   // Now you can use studentId and status in your loop
   //console.log(`Student ID: ${studentId}, Status: ${status}`);
 
   // Check if both studentId and status are defined
   if (studentId && status) {
     // Create an attendance object based on the selected data
     const attendanceData = {
       iduser: studentId,
       status: status,
     };
 
     //console.log('Sending attendanceData', attendanceData);
 
     // Send the attendance data for this student
     this.att.createAttendance(attendanceData).subscribe(response => {
       // Handle the response from the API if needed
       console.log('API response:', response);
     });
   } else {
    // console.error('Both studentId and status must be provided for each student.');
   }
 }
 
 //console.log('After loop');
 
   }
}
