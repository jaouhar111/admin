import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get("id")
    this.user.getonestudent(id).subscribe({
   
   
    
      next:student => { this.data = student }
      
     })
     
   
  }
  data: any = [];
  constructor(private route:ActivatedRoute,private user:UserServiceService){}
}
