import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
constructor(private s1:AppointmentService){ }
appointments:Appointment[]=[];
ngOnInit(){
  this.getAppointment();
}
getAppointment(){
  this.s1.getAllApointment().subscribe(data=>{
    this.appointments=data;
  })
}
delete(id:number){
this.s1.deleteAppointment(id).subscribe(data=>{
  console.log(data);
  this.getAppointment();
})
}
}
