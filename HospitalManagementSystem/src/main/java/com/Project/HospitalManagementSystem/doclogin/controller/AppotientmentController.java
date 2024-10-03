package com.Project.HospitalManagementSystem.doclogin.controller;

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

import com.Project.HospitalManagementSystem.doclogin.entity.Appoinment;
import com.Project.HospitalManagementSystem.doclogin.repository.AppointmentsRepository;
@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api/v2")
public class AppotientmentController {
	@Autowired
	private AppointmentsRepository appointmentsRepository;
	@PostMapping("/appointments")
	public Appoinment createAppointment(@RequestBody Appoinment appoinment) {
		return appointmentsRepository.save(appoinment);
	}
	@GetMapping("/appointments")
	public List<Appoinment> getAllAppointment(){
		return appointmentsRepository.findAll();
	}
//	
	@DeleteMapping("/appointments/{id}")
	public ResponseEntity<Map<String, Boolean>>deleteAppointment(@PathVariable long id) throws AttributeNotFoundException{
		Appoinment appointment= appointmentsRepository.findById(id).orElseThrow( ()-> new AttributeNotFoundException("Appointment not found with id"));
		appointmentsRepository.delete(appointment);
		Map<String, Boolean> response=new HashMap<String, Boolean>();
		response.put("Deleted", Boolean.TRUE);
		return ResponseEntity.ok(response) ;
	}
}
