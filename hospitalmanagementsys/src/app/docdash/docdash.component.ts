import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrls: ['./docdash.component.css']
})
export class DocdashComponent {
  constructor(private patientService:PatientService,private router:Router, private docauth:DocauthService){}
patients:Patient[]=[];
ngOnInit(){
  this.getPatients();
}
getPatients(){
  this.patientService.getPatientList().subscribe(data=>{
this.patients=data
  })
}
update(id:number){

  this.router.navigate(['update-patient',id])



}
delete(id:number){
  this.patientService.delete(id).subscribe(data=>{
    console.log(data);
    this.getPatients
  })
}
view(id:number){

  this.router.navigate(['view-patient',id]);
}
logout(){

  this.docauth.logout();
  this.router.navigate(['home'])
}
}
