import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { PatientDirective } from './patient.directive';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './createappointment/createappointment.component'
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DocdashComponent } from './docdash/docdash.component';
import { AdloginComponent } from './adlogin/adlogin.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewMedicineComponent } from './view-medicine/view-medicine.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { DocloginComponent } from './doclogin/doclogin.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmindashComponent,
    PatientDirective,
    AppointmentComponent,
    CreateAppointmentComponent,
    HomeComponent,
    DocdashComponent,
    AdloginComponent,
    CreateMedicineComponent,
    CreatePatientComponent,
    
    MedicinelistComponent,
    UpdateMedicineComponent,
    UpdatePatientComponent,
    ViewMedicineComponent,
    ViewPatientComponent,
    DocloginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
