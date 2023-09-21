import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { IUser } from '../user';

@Component({
  selector: 'app-salaire',
  templateUrl: './salaire.component.html',
  styleUrls: ['./salaire.component.css']
})
export class SalaireComponent implements OnInit{
  employees:IUser[]=[];
  selectedMonth: Date | null;
  selectedOption:IUser|any;
  constructor(private userService:UserServiceService) {
    this.selectedMonth=null;
  }
  ngOnInit(): void {
    this.userService.getStudent()

  .subscribe((data: IUser[]) => {
    // Filter users by role 'student'
    this.employees = data.filter(user => user.role !== 'Student');
    this.selectedOption=this.employees;
    
  });
  }
 
}
