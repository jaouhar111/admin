import { Component, OnInit } from '@angular/core';
import { IUser } from '../user';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  constructor(private userService:UserServiceService) {}
  employees: IUser[] = [];
  filteredList: IUser[] = [...this.employees];
  emp:String ="";
  filterByName(): void {
    if (this.emp !== undefined) {
      this.filteredList = this.employees.filter(item => item.name >= this.emp);
    } else {
      this.filteredList = [...this.employees]; // Réinitialisez la liste si le critère est vide
    }
  }
  ngOnInit(): void {
    this.userService.getStudent()

  .subscribe((data: IUser[]) => {
    // Filter users by role 'student'
    this.employees = data.filter(user => user.role !== 'Student');
    console.log(this.employees);
    this.filteredList=[...this.employees]
  });
  }
}
