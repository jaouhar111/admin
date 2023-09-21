import { Component, OnInit } from '@angular/core';
import { ClasseService } from 'src/app/classe.service';
import { IClassroom, IUser } from '../user';
import { AttendanceService } from 'src/app/attendance.service';


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  today: Date = new Date();
  cla:String='Classe A'
  //selectedStatus: { studentId: string, status: string }[] = [];
  selectedStatus: { [studentId: string]: string } = {};

  Classes: IClassroom[] = [];
  //Students:IClassroom[]=[]
  filteredList: IClassroom[] = [];
  constructor(private Cla:ClasseService,private att:AttendanceService){}
  
  ngOnInit(): void {
    
    this.Cla.getClasse()
    .subscribe(classe =>{
      this.Classes = classe;
     
      this.updateFilteredList()
    });
    
  }
  updateFilteredList() {
    this.filteredList = this.Classes.filter((classroom) => classroom.name === this.cla);
    console.log(this.filteredList);
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
