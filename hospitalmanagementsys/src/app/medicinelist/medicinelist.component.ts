import { Component } from '@angular/core';
import { MedicineServiceService } from '../medicine-service.service';
import { Medicine } from '../medicine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicinelist',
  templateUrl: './medicinelist.component.html',
  styleUrls: ['./medicinelist.component.css']
})
export class MedicinelistComponent {
  medicines:Medicine[]=[];
  constructor(private medicineService:MedicineServiceService,private router:Router){

  }

  ngOnInit():void{

    this.getMedicine();
  }

    getMedicine(){

        this.medicineService.getMedicines().subscribe(data=>{

          this.medicines=data;

        })
    }

    update(id:number){

      this.router.navigate(['update-medicine',id])

    
    }

    delete(id:number){

      this.medicineService.delete(id).subscribe(data=>{
        console.log(data);
        this.getMedicine();
      })
    }
}

