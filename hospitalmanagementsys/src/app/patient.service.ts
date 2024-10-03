import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient:HttpClient) { }
  private baseUrls="http://localhost:1010/api/v1/patients"

  getPatientList():Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseUrls}`)
  }
  delete(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseUrls}/${id}`)
  }
  createPatient(patient:Patient):Observable<Patient>{

    return this.httpClient.post<Patient>(`${this.baseUrls}`,patient);
   }
  
   getPatientById(id:number):Observable<Patient>{
     
       return this.httpClient.get<Patient>(`${this.baseUrls}/${id}`);
   }
  
   updatePatient(id:number,patient:Patient):Observable<object>{
  
    return this.httpClient.put<Patient>(`${this.baseUrls}/${id}`,patient);
  
   }
  
    
  }
  
