import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent {
  id:number=0;
  constructor(private route:ActivatedRoute,private patientService:PatientService,private router:Router){}
  patient: any = {
    urgency: ''
  };
    ngOnInit():void{

      this.id=this.route.snapshot.params['id'];
      this.patientService.getPatientById(this.id).subscribe(data=>{

        this.patient=data;
      })

    }

   onSubmit(){
    
    this.patientService.updatePatient(this.id,this.patient).subscribe(data=>{

      console.log(data);
      this.goToDocDash();

    })
        
   }

   goToDocDash(){

    this.router.navigate(['docdash'])
   }
}

