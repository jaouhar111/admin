import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { IUser, IAttendance } from '../user';
import { AttendanceService } from 'src/app/attendance.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  absentPercentage: number = 0;
  precencePercentage: number = 0;
  students: IUser[] = [];
  Teachers: any[] = [];
  attemp:IAttendance[]=[];
  attstu:IAttendance[]=[];
  constructor(private userService:UserServiceService,private att:AttendanceService){}
  ngOnInit(): void {
    
    this.getStudent();
    this.getProf();
    this.getattEmp();
    this.getattStu();
    this.calculateAbsentPercentage();
    this.calculatepresentPercentage();
     
    
  }
  getStudent(){
    this.userService.getStudent()
  .subscribe((data: IUser[]) => {
    // Filter users by role 'student'
    this.students = data.filter(user => user.role === 'Student');
    
  });
  }

  getProf(){
    this.userService.getTeacher()
    .subscribe((data: IUser[]) => {
      // Filter users by role 'student'
      this.Teachers = data.filter(user => user.role !== 'Student');
      //console.log("all teachers"+JSON.stringify(this.Teachers));
      

    });
  }

  getattEmp() {
    const currentDate = new Date(); // Get the current date
  
    this.att.getAllAttendance()
      .subscribe((data: IAttendance[]) => {
        const uniqueNames = new Set<string>();
  
        // Filter users by status 'Present' and date matching the current date
        this.attemp = data
          .filter(user => user.status === 'Present')
          .filter(user => user.iduser.role !== 'Student')
          .filter(user => {
            // Convert the date from the data to a JavaScript Date object
            const attendanceDate = new Date(user.datenow);
  
            // Check if the date matches the current date
            if (
              attendanceDate.getDate() === currentDate.getDate() &&
              attendanceDate.getMonth() === currentDate.getMonth() &&
              attendanceDate.getFullYear() === currentDate.getFullYear()
            ) {
              // Check if the name is not already in the Set
              if (!uniqueNames.has(user.iduser.name)) {
                // Add the name to the Set
                uniqueNames.add(user.iduser.name);
                return true;
              }
            }
            return false;
          });
  
        
      });
  }
  
  getattStu() {
    const currentDate = new Date(); // Get the current date
  
    this.att.getAllAttendance()
      .subscribe((data: IAttendance[]) => {
        const uniqueNames = new Set<string>();
  
        // Filter users by status 'Absent', role 'Student', and date matching the current date
        this.attstu = data
          .filter(user => user.status === 'Absent')
          .filter(user => user.iduser.role === 'Student')
          .filter(user => {
            // Convert the date from the data to a JavaScript Date object
            const attendanceDate = new Date(user.datenow);
  
            // Check if the date matches the current date
            if (
              attendanceDate.getDate() === currentDate.getDate() &&
              attendanceDate.getMonth() === currentDate.getMonth() &&
              attendanceDate.getFullYear() === currentDate.getFullYear()
            ) {
              // Check if the name is not already in the Set
              if (!uniqueNames.has(user.iduser.name)) {
                // Add the name to the Set
                uniqueNames.add(user.iduser.name);
                return true;
              }
            }
            return false;
          });
  
        
      });
  }
  

  calculateAbsentPercentage() {
    console.log("Total students:", this.students.length);
    console.log("Absent students:", this.attstu.length);
  
    if (this.students.length > 0) {
     return this.absentPercentage = (this.attstu.length / this.students.length) * 100;
    } else {
      return this.absentPercentage = 0; // Handle cases where there are no students
    }
  
    //console.log("Absent percentage:", this.absentPercentage);
  }
  calculatepresentPercentage() {
    console.log("Total employee:", this.Teachers.length);
    console.log("Absent students:", this.attemp.length);
  
    if (this.students.length > 0) {
     return this.precencePercentage = (this.attemp.length / this.Teachers.length) * 100;
    } else {
      return this.precencePercentage = 0; // Handle cases where there are no students
    }
  
    //console.log("Absent percentage:", this.absentPercentage);
  }
}
