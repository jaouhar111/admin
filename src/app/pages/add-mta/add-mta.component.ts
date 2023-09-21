import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClasseService } from 'src/app/classe.service';
import { LoadingService } from 'src/app/loading.service';


@Component({
  selector: 'app-add-mta',
  templateUrl: './add-mta.component.html',
  styleUrls: ['./add-mta.component.css']
})
export class AddMtaComponent implements OnInit {
  name:String='';
  note:String='';
  classeroom:String=""
  Classes:any[]=[]
  constructor(private Cla:ClasseService,private mta:LoadingService,private router:Router){}
  ngOnInit(): void {
    this.Cla.getClasse()
    .subscribe(classe =>{
      this.Classes = classe
      console.log(this.Classes);
      
    });
  }

  ajMata(){
    
  
    this.mta.ajMatiere(this.name,this.note).subscribe(
      (response) => {
        const matiereId = response.body.matiereId // Access the generated student ID from the response
        console.log('matiere ID:', matiereId);
        console.log('classeroom ID',this.classeroom);
        
        // Now you have the generated student ID
        
        this.Cla.updateClassroomAndAddMatiere(this.classeroom, matiereId).subscribe(
          (updatedClassroom) => {
            console.log('Classroom updated successfully:', updatedClassroom);
          },
          (error) => {
            console.error('Error:', error);
            // Handle error
          }
        );
      },
      (error) => {
        console.error('Error:', error);
        // Handle error
      }
    );
    this.showSuccessMessage();
      
    }

showMessage = false;
successMessage = '';

showSuccessMessage() {
  this.successMessage = 'Matiere added successfully';
  this.showMessage = true;

  // Hide the message after a certain time (e.g., 5 seconds)
  setTimeout(() => {
    this.showMessage = false;
    this.successMessage = '';
    this.router.navigate(['/matiere']);
  }, 5000);
  
}
}
