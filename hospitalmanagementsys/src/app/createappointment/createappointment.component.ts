import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './createappointment.component.html',
  styleUrls: ['./createappointment.component.css']
})
export class CreateAppointmentComponent {
  appointment:Appointment=new Appointment();

  constructor(private s:AppointmentService,private router :Router){}

  saveAppointment(){
this.s.createAppointment(this.appointment).subscribe(data=>{
  
console.log(data);
this.gotoAppointment();
})
  }
  onSubmit(){
    this.saveAppointment();
  }
  gotoAppointment(){
    this.router.navigate(['/appointmentlist'])
  }
}
