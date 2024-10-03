import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineServiceService } from '../medicine-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrls: ['./create-medicine.component.css']
})
export class CreateMedicineComponent {
  medicine:Medicine=new Medicine();

  constructor(private medicineService:MedicineServiceService,private router:Router){}

  saveMedicine(){

    this.medicineService.createMedicine(this.medicine).subscribe(data=>{

      console.log(this.medicine);
      this.goToViewMedicine();
    })

  }

  onSubmit(){

    this.saveMedicine();
  }

  goToViewMedicine(){
    this.router.navigate(['/view-medicine'])
  }
}
