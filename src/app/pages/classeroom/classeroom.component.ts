import { Component, OnInit } from '@angular/core';
import { ClasseService } from 'src/app/classe.service';
import { UserServiceService } from 'src/app/user-service.service';
import { IUser } from '../user';

@Component({
  selector: 'app-classeroom',
  templateUrl: './classeroom.component.html',
  styleUrls: ['./classeroom.component.css']
})
export class ClasseroomComponent implements OnInit{
  Classes: any[] = [];
  Students:IUser [] = [];
  constructor(private student:UserServiceService,private Cla:ClasseService){}
  ngOnInit(): void {
    this.student.getStudent()
    .subscribe((data: IUser[]) => {
      // Filter users by role 'student'
      this.Students = data.filter(user => user.role === 'Student');
      console.log(this.Students);
      
    });
    this.Cla.getClasse()
    .subscribe(classe =>{
      this.Classes = classe
      console.log(this.Classes);
      
    });
  }

}
