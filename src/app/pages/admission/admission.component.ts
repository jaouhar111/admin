import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { IUser } from '../user';
import { Router } from '@angular/router';
import { ClasseService } from 'src/app/classe.service';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {
  Classes: any[] = [];
  classeroom:String=""
  name: String = '';
  register:String ='';
  genre :String ='';
  photo:String ='';
  dateN: Date= new Date();
  adresse:String ='';
  role:String ='Student';
  father:String ='';
  profession:String ='';
  nationalid:String ='';
  education:String ='';
  mobile:String ='';
  email:String ='';
  
  student:any= [];
  constructor(private userService:UserServiceService,private router:Router,private Cla:ClasseService){

  }  
  ngOnInit(): void {
    this.Cla.getClasse()
    .subscribe(classe =>{
      this.Classes = classe
      console.log(this.Classes);
      
    });
  }
  ajetudient(){
    
  
  this.userService.ajStudent(this.name,this.register,this.genre,this.photo,this.dateN,this.adresse,this.role,this.father,this.profession,this.nationalid,this.education,this.mobile,this.email).subscribe(
    (response) => {
      const studentId = response.body.userId // Access the generated student ID from the response
      console.log('Student ID:', studentId);
      this.Cla
  .updateClasseroom(this.classeroom, studentId)
  .subscribe((updatedClassroom) => {
    console.log('Classroom updated:', updatedClassroom);
    // You can update the UI or perform other actions as needed
  });
    }
    
  )}
  

}
