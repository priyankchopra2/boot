package com.vrecruit.entities;



import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.web.multipart.commons.CommonsMultipartFile;

import com.fasterxml.jackson.annotation.JsonCreator;

@Entity
@Table(name = "jobprocess")
public class JobProcessDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "jobid")
	private Long jobid;

	private int currentround;
	private int marks;
	private boolean selected;
	
	   
	private String resume;
	

	@OneToOne(cascade=CascadeType.ALL )
	private User user;
	
	@ManyToOne(cascade=CascadeType.ALL )
	private JobApplication jobApplication;

	public Long getJobid() {
		return jobid;
	}

	public void setJobid(Long jobid) {
		this.jobid = jobid;
	}

	public int getMarks() {
		return marks;
	}

	public void setMarks(int marks) {
		this.marks = marks;
	}

	public Boolean getSelected() {
		return selected;
	}

	public void setSelected(Boolean selected) {
		this.selected = selected;
	}

	public JobApplication getJobApplication() {
		return jobApplication;
	}

	public void setJobApplication(JobApplication jobApplication) {
		this.jobApplication = jobApplication;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}


	
	
	public int getCurrentround() {
		return currentround;
	}

	public String getResume() {
		return resume;
	}

	public void setResume(String resume) {
		this.resume = resume;
	}

	public void setCurrentround(int currentround) {
		this.currentround = currentround;
	}

	public void setSelected(boolean selected) {
		this.selected = selected;
	}

	@Override
	public String toString() {
		return "JobProcessDetails [jobid=" + jobid + ", currentround=" + currentround + ", marks=" + marks
				+ ", selected=" + selected +  ", user=" + user
				+ ", jobApplication=" + jobApplication + "]";
	}

	



}
