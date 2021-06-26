import { Component, OnInit } from '@angular/core';
import { JobofferService1 } from 'app/service/joboffer1.service';
import { JobofferService } from 'app/service/joboffer.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-notificationuser',
  templateUrl: './notificationuser.component.html',
  styleUrls: ['./notificationuser.component.css']
})
export class NotificationuserComponent implements OnInit {

  constructor(private jobservice1 : JobofferService1,private jobservice : JobofferService) { }
token : string=localStorage.getItem("email")
message : any=[]
  ngOnInit(): void {
this.jobservice.decode(this.token).subscribe((id)=>{
    this.jobservice1.searchfollow(id.email).subscribe((search)=>{
      console.log(search)
    for(let i = 0 ; i<search.length;i++){
      console.log(search[i].idcompany)
      this.jobservice1.findnotification(search[i].idcompany).subscribe((not)=>{
        for(let j = 0 ; j<not.length;j++){
          this.message.push(not[i])
        }
      })
    }
    console.log(this.message)
    })
  
})

}
}
