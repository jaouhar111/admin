import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClasseService } from 'src/app/classe.service';
import { LoadingService } from 'src/app/loading.service';
import { IClassroom, IMatiere } from '../user';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})
export class MatiereComponent implements OnInit {
  name:String='';
  note:String='';
  //classeroom:String=""
  Classes:IClassroom[]=[]
  Matieres:String[]=[]
  constructor(private Cla:ClasseService,private mta:LoadingService,private router:Router){}
  ngOnInit(): void {
    this.Cla.getClasse()
    .subscribe(classe =>{
      this.Classes = classe
      console.log(this.Classes);
      
      

    });
    
    
    
  }
  
 
  
}
