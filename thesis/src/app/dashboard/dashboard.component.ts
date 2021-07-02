import { Component, OnInit } from '@angular/core';
import { JobofferService } from 'app/service/joboffer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private jobservice : JobofferService) { }
  users : any =[]
  ngOnInit(): void {
    this.jobservice.getAllUser().subscribe((user)=>{
      this.users=user
    })
  }
  delete(data){
   
    for (var i=0; i<this.users.length; i++){
      if (this.users[i]._id===data._id) {
         this.users.splice(i,1)
      }
    }
    this.jobservice.deleteUser(data._id).subscribe((user)=>{
      console.log(user)
    })
   }
}
