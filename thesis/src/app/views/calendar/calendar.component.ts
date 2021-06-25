import {Component, OnInit} from "@angular/core";
import { Calendar } from 'fullcalendar';
declare const require: any;
const FullCalendar= require('fullcalendar')
import swal from 'sweetalert2';
import { JobofferService } from "app/service/joboffer.service";


@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"]
})
export class CalendarComponent implements OnInit {
token : string=localStorage.getItem("email") || "";
calendardetails : any;
bolean :boolean=true
title : string;
time : string;
color : string;



  constructor(private jobservice : JobofferService) {}

  ngOnInit() {
  const calend=this.calendardetails
    if(!this.token){
      this.token=localStorage.getItem("email1")
      this.bolean=false
      
    }
    console.log(this.token)
    this.jobservice.decode(this.token).subscribe((id)=>{
     
   
  this.jobservice.getcalendar(id.email).subscribe((cal)=>{
    this.calendardetails=cal
    for(let i=0;i<this.calendardetails.length;i++){
    delete this.calendardetails[i]._id
    delete this.calendardetails[i].id
   }
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
     events: this.calendardetails,
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
         console.log(this.calendardetails)
         for(let i =0;i<this.calendardetails.length;i++){
           if(this.calendardetails[i].start === info.startStr+" "+timestart){
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
           

           this.jobservice.decode(this.token).subscribe((id)=>{
         
            
              let calendar1={
                id : id.email ,
                title:eventData.title,
                start: eventData.start,
                end: eventData.end,
                color : eventData.color
              }
              console.log(calendar1)
              this.jobservice.createcalendar(calendar1).subscribe((create)=>console.log(create))
    
            })
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
 onSubmit(id){
console.log(id)
 }
}
