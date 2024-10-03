import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineServiceService } from '../medicine-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-medicine',
  templateUrl: './view-medicine.component.html',
  styleUrls: ['./view-medicine.component.css']
})
export class ViewMedicineComponent {
  id:number=0;
  medicine:Medicine=new Medicine();
   constructor(private medicineService:MedicineServiceService,private route:ActivatedRoute){

   }

   ngOnInit():void{
      
      this.id=this.route.snapshot.params['id'];
      this.medicineService.getMedicineById(this.id).subscribe(data=>{

        this.medicine=data;
      })
   }
}
