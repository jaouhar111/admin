import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClasseService } from 'src/app/classe.service';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-emp-admission',
  templateUrl: './emp-admission.component.html',
  styleUrls: ['./emp-admission.component.css']
})
export class EmpAdmissionComponent implements OnInit{

  user: any = {};
  constructor(private userService:UserServiceService,private router:Router,private Cla:ClasseService){} 
  ngOnInit(): void {
    
  }

  addUser() {
    this.userService.addUser(this.user).subscribe(
      (response) => {
        console.log('User added successfully:', response);
        // You can add further logic here, e.g., navigate to a different route or display a success message.
      },
      (error) => {
        console.error('Error adding user:', error);
        // Handle errors here, e.g., display an error message.
      }
    );
    this.router.navigate(['/employee']);
  }

}
