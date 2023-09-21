import { Component, OnInit,OnDestroy,AfterViewInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { IUser } from '../user';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/loading.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit,OnDestroy,AfterViewInit{
  receivedId: String='';
  students: IUser[] = [];
  filteredList: IUser[] = [...this.students]; 
  stu:String =""
constructor(private userService:UserServiceService,private router:Router,private load:LoadingService) {}
  ngAfterViewInit(): void {
    this.load.loadExternalScript();
  }
  
filterByName(): void {
  if (this.stu !== undefined) {
    this.filteredList = this.students.filter(item => item.name >= this.stu);
  } else {
    this.filteredList = [...this.students]; // Réinitialisez la liste si le critère est vide
  }
}
ngOnInit(): void {
//this.load.loadExternalScript();
  this.userService.getStudent()
  .subscribe((data: IUser[]) => {
    // Filter users by role 'student'
    this.students = data.filter(user => user.role === 'Student');
    console.log(this.students);
    this.filteredList=[...this.students]
  });
}
ngOnDestroy(): void {
  this.load.removeExternalScript()
}


onItemClick(itemId: String) {
  this.receivedId = itemId;
}
deleteUser(userId: String): void {
  this.userService.deleteUser(userId)
    .subscribe(
      () => {
        console.log('User deleted successfully.');
        // Perform any other actions after successful deletion.
        
      },
      (error) => {
        console.error('Error deleting user:', error);
        // Handle error gracefully.
      }
    );
    const studentIndex = this.students.findIndex((user) => user._id === userId);

  // Find the index of the user to delete in the filteredList array
  const filteredIndex = this.filteredList.findIndex((user) => user._id === userId);

  // If the user is found in both arrays, remove them
  if (studentIndex !== -1 && filteredIndex !== -1) {
    this.students.splice(studentIndex, 1);
    this.filteredList.splice(filteredIndex, 1);
    
}
}
  
}
