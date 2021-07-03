import {Component, OnInit} from "@angular/core";
import { Calendar } from 'fullcalendar';
declare const require: any;
const FullCalendar= require('fullcalendar')
import swal from 'sweetalert2';
import { JobofferService } from "app/service/joboffer.service";
import { BrowserJsonp } from "@angular/http/src/backends/browser_jsonp";


@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"]
})
export class CalendarComponent implements OnInit {
token : string=localStorage.getItem("userid") || localStorage.getItem("companyid");
bigcalend : any=[];
bolean :boolean=true
title : string;
time : string;
color : string;
option : string


  constructor(private jobservice : JobofferService) {}

  ngOnInit() {

    
    
    this.jobservice.decode(this.token).subscribe((id)=>{
    
     if(localStorage.getItem("userid")){
       this.option=id.userid
     }
     else if(localStorage.getItem("companyid")){
      this.option=id.companyid
      this.bolean=false
    }
   
  this.jobservice.getcalendar(this.option).subscribe((cal)=>{
    
    this.bigcalend=cal
    console.log(this.bigcalend)
  
   
   let today = new Date();
   let y = today.getFullYear();
   let m = today.getMonth();
   let d = today.getDate();
  
   var calendarEl = document.getElementById('calendar');
   var calendar = new FullCalendar.Calendar(calendarEl, {
     
     defaultDate: today,
     editable: true,
     selectable: true,
     header: {
       left: 'title',
       center: 'month,agendaWeek,agendaDay',
       right: 'prev,next,today'
     },
     views: {
       month: {
         titleFormat: { month: 'long', year: 'numeric'}
       },
       agendaWeek: {
         titleFormat: { month: 'long', year: 'numeric', day: 'numeric'},
       },
       agendaDay: {
         titleFormat: { month: 'short', year: 'numeric', day: 'numeric'}
       },
     },
     eventLimit: true, // allow "more" link when too many events
     events: this.bigcalend,
     eventClick: function(info) {
       info.jsEvent.preventDefault();
       console.log('hey', info)
     },
     select:(info)=> {
       console.log(info)
       swal.fire({
         title: 'Create an Event',
         html:
          '<div class="form-group">' +
           '<input class="form-control" type="title" placeholder="Event Title" id="input-field">' +
           '<input class="form-control"  type="time"  placeholder="Time start" id="input-field1">'+ 
           '<select  id="input-field2" > <option value="red">Red</option><option value="blue">Blue</option><option value="green">Green</option><option value="pink">Pink</option></select>'+  
           '</div>'+
           '</form>',
         showCancelButton: true,
         customClass:{
           confirmButton: 'btn btn-success ',
           cancelButton: 'btn btn-danger',
         },
         buttonsStyling: false,
       }).then((result)=> {
          console.log(this.token)
          
          let bol=true
         let eventData;
         let event_title = (document.getElementById("input-field") as HTMLInputElement).value;
         let timestart = (document.getElementById("input-field1") as HTMLInputElement).value;
         let color = (document.getElementById("input-field2") as HTMLInputElement).value;
         console.log(this.bigcalend)
         for(let i =0;i<this.bigcalend.length;i++){
           if(this.bigcalend[i].start === info.startStr+" "+timestart){
           bol=false
           }
         }
         if (event_title && bol) {
           eventData = {
             title: event_title,
             start: info.startStr+" "+timestart,
             end: info.startStr,
             color: color

           };
           
         console.log(id)
          
         
            
              let calendar1={
                id : this.option ,
                title:eventData.title,
                start: eventData.start,
                end: eventData.end,
                color : eventData.color
              }
              console.log(calendar1)
              this.jobservice.createcalendar(calendar1).subscribe((create)=>console.log(create))
    
           console.log(eventData)
           calendar.addEvent(eventData);
         }
       });

    }
   
   });
   calendar.render();
   
     
  })

    })
  
    
    
  
  
  }  
 onSubmit(start,id){
  
   const day=start.split(" ")[0]
   const obj={
    title: this.title,
    start: day+" "+this.time,
    end:day,
    color: this.color
   }
   if(!this.time){
     obj.start=start
   }
   if(!this.title){
     delete obj.title
   }
this.jobservice.updatecalendar(id,obj).subscribe((update)=>{
  console.log(update)
  for(let i =0 ; i < this.bigcalend.length ; i++){
    if(this.bigcalend[i].start===start){
      
      this.bigcalend[i]=obj
    }
  }
})

 }
 delete(start,id){
   this.jobservice.deletecalendar(id).subscribe((del)=>{
     console.log(del)
    for(let i =0 ; i < this.bigcalend.length ; i++){
      if(this.bigcalend[i].start === start){
        this.bigcalend.splice(i,1)
      }
    }
   })
  
  }

}
