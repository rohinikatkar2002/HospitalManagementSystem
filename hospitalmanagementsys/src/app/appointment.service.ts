import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient:HttpClient) { }
  private baseUrl="http://localhost:1010/api/v2/appointments"
  getAllApointment():Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}`)
  }

  createAppointment(appoinment:Appointment):Observable<Appointment>{
    return this.httpClient.post<Appointment>(`${this.baseUrl}`,appoinment);
  }
  deleteAppointment(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  
}
