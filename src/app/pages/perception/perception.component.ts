import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-perception',
  templateUrl: './perception.component.html',
  styleUrls: ['./perception.component.css']
})
export class PerceptionComponent implements OnInit {
today:Date=new Date;
data: any = [];
mens="";
insc='';
trsp='';
uni='';
art='';
total:number=0
constructor(private route:ActivatedRoute,private user:UserServiceService){}
  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get("id");
    this.user.getonestudent(id).subscribe({
   
   
    
      next:student => { this.data = student }
      
     })
  }

  totalTTc(){
    this.total= parseInt(this.mens)+parseInt(this.insc)+parseInt(this.trsp)+parseInt(this.uni)+parseInt(this.art)
    
  }
}
