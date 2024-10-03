package com.Project.HospitalManagementSystem.doclogin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Project.HospitalManagementSystem.doclogin.entity.Medicine;
import com.Project.HospitalManagementSystem.doclogin.repository.MedicineRepository;

@RestController
@RequestMapping("/api/v3")
public class MedicineController {

	@Autowired
	private MedicineRepository medicineRepository;
	@PostMapping("/insert")
	public Medicine createMedicine(@RequestBody Medicine medicine){
		return medicineRepository.save(medicine);
	}
	@GetMapping
	public List<Medicine> getAllMedicine(){
		return medicineRepository.findAll();
	}
	@DeleteMapping
	public String deleteMedicine(@RequestBody Medicine medicine) {
		medicineRepository.delete(medicine);
		return "medicine deleted successfully";
	}
}
