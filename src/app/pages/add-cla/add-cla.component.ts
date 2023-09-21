import { Component, OnInit } from '@angular/core';
import { filter, tap } from 'rxjs';
import { UserServiceService } from 'src/app/user-service.service';
import { IUser } from '../user';
import { ClasseService } from 'src/app/classe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cla',
  templateUrl: './add-cla.component.html',
  styleUrls: ['./add-cla.component.css']
})
export class AddClaComponent implements OnInit {
  Teachers: IUser[] = [];
  name:String=""
  prof: String = ""
  constructor(private teacher:UserServiceService,private Classe:ClasseService,private router:Router){}
  ajClasse(){
    
  
    this.Classe.ajClasse(this.name,this.prof).subscribe({
      next:()=>console.log("save classe"+this.name+this.prof),
      
      
      
   });
   this.router.navigate(['/classe']);
   
    }
  ngOnInit(): void {
    
    this.teacher.getTeacher()
    .subscribe((data: IUser[]) => {
      // Filter users by role 'student'
      this.Teachers = data.filter(user => user.role === 'Professeur');
      console.log(this.Teachers);
      
    });
    
    
    
  }
  
  
 
}

