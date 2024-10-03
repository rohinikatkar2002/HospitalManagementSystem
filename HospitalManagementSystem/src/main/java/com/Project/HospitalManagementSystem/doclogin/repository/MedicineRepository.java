package com.Project.HospitalManagementSystem.doclogin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Project.HospitalManagementSystem.doclogin.entity.Medicine;
@Repository
public interface MedicineRepository extends JpaRepository<Medicine, Long>{

}
