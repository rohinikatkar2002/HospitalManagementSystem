package com.Project.HospitalManagementSystem.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.management.AttributeNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Project.HospitalManagementSystem.entity.Patient;
import com.Project.HospitalManagementSystem.repository.PatientRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/v1")
public class PatientController {
	@Autowired
	private PatientRepository patientRepository;
	//i am creating the object of the patientrepository with the help of the constructor injection or also with the help of the Autowired annotations
	@PostMapping("/patients")
	public Patient createPatient(@RequestBody Patient patient) {
		
		return patientRepository.save(patient);		
	}
	@GetMapping("/patients")
	public List<Patient> getAllPatient() {
		return patientRepository.findAll();
	}
	
//	@DeleteMapping
//	public String deletepatient(@RequestBody Patient patient) {
//		patientRepository.delete(patient);
//		return "patient deleted successfully";
//	}
	@DeleteMapping("/patients/{id}")
	public ResponseEntity<Map<String, Boolean>>deletePatient(@PathVariable long id) throws AttributeNotFoundException{
		Patient patient=patientRepository.findById(id).orElseThrow(()->new AttributeNotFoundException("patient not found with id:"+id));
		patientRepository.delete(patient);
		Map<String, Boolean> response=new HashMap<String, Boolean>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
