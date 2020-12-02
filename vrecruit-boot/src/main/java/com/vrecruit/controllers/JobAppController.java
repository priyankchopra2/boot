package com.vrecruit.controllers;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vrecruit.entities.Interviewer;
import com.vrecruit.entities.JobApplication;
import com.vrecruit.entities.JobProcessDetails;
import com.vrecruit.repository.InterviewerRepository;
import com.vrecruit.repository.JobApplicationRepository;
import com.vrecruit.repository.JobProcessRepository;

@RequestMapping("/jobApp")
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class JobAppController {


	@Autowired
	JobApplicationRepository jobAppRepo;

	@Autowired
	JobProcessRepository jobProcessRepo;

	@Autowired
	InterviewerRepository interviewerRepo;

	
	//Create Job Application
	@PostMapping("/create")
	public ResponseEntity<?> create(@RequestBody JobApplication jobApp)  {
		System.out.println("////////"+jobApp.toString());
		Optional<Interviewer> intObj =  interviewerRepo.findById(jobApp.getInterviewer().getId()); 
		System.out.println("*****"+intObj.toString());
		jobApp.setInterviewer(intObj.get());
		System.out.println("////////"+jobApp.toString());
		JobApplication result = jobAppRepo.save(jobApp);
        return ResponseEntity.ok().body(result); 
	}
	
	//Fetching All Job Apps
	@GetMapping("getAll")
	public Collection<JobApplication> getAll(){
		return jobAppRepo.findAll();
	}
	
	//editing job application
	@PutMapping("/update")
    public ResponseEntity<?> updatePooling(@RequestBody JobApplication jobApp){
    	JobApplication result = jobAppRepo.save(jobApp);
//    	Collection<JobApplication> list  = jobAppRepo.findAll();
    	return ResponseEntity.ok().body(result);
    }
	
	//Deleting specific application
	@DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletePooing(@PathVariable Long id){
    	jobAppRepo.deleteById(id);
    	return ResponseEntity.ok().build();
    }
	
	//candidates who have applied for specific job
	@GetMapping("/candidates/{id}")
	public Collection<JobProcessDetails> getCandidates(@PathVariable Long id){
		
		Optional<JobApplication> obj= jobAppRepo.findById(id);
		
		return jobProcessRepo.findByJobApplication(obj);
	}
	
	//select specific candidate from list
	@GetMapping("/getCandidate/{id}")
	public Optional<JobProcessDetails> getCandidate(@PathVariable Long id){
		
		return jobProcessRepo.findById(id);
	
	}
	
	//Fetch By interviewer ID 
	@GetMapping("get/{id}")
	public Collection<JobApplication> getByInterviewerId(@PathVariable Long id){
		Optional<Interviewer> intObj =  interviewerRepo.findById(id); 
		return jobAppRepo.findByInterviewer(intObj.get());
	}
	
	//Fetch By interviewer ID 
	@GetMapping("get/jid/{id}")
	public Optional<JobApplication> getById(@PathVariable Long id){
		return jobAppRepo.findById(id);
	}

	
}
