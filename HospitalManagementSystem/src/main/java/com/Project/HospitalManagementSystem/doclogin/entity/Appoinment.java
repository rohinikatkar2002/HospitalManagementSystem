package com.Project.HospitalManagementSystem.doclogin.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "appointments")
public class Appoinment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String name;
	private String age;
	private String sysmtomps;
	private String number;
	public Appoinment() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Appoinment(long id, String name, String age, String sysmtomps, String number) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.sysmtomps = sysmtomps;
		this.number = number;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public String getSysmtomps() {
		return sysmtomps;
	}
	public void setSysmtomps(String sysmtomps) {
		this.sysmtomps = sysmtomps;
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	

}
