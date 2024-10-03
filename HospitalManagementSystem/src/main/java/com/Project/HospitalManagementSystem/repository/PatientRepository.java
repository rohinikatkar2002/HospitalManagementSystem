package com.Project.HospitalManagementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Project.HospitalManagementSystem.entity.Patient;
@Repository
public interface PatientRepository extends JpaRepository<Patient, Long>{

}
