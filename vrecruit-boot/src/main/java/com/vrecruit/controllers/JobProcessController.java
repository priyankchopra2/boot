package com.vrecruit.controllers;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import com.vrecruit.entities.JobApplication;
import com.vrecruit.entities.JobProcessDetails;
import com.vrecruit.entities.User;
import com.vrecruit.repository.JobApplicationRepository;
import com.vrecruit.repository.JobProcessRepository;
import com.vrecruit.repository.UserRepository;

@RequestMapping("/jobprocess")
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class JobProcessController {
	@Autowired
	JobProcessRepository jobprocessrepo;
	@Autowired
	private UserRepository userrepo;

	@Autowired
	JobApplicationRepository jobAppRepo;

	@GetMapping("joblist/{id}")
	public Collection<JobApplication> getById(@PathVariable Long id) {
		Optional<User> userobj = userrepo.findById(id);
		Optional<JobProcessDetails> user = jobprocessrepo.findByUser(userobj);

		if (user.isPresent()) {
			return null;
		} // System.out.println(user);
		return jobAppRepo.findAll();

	}

	@GetMapping("status/{id}")
	public Optional<JobProcessDetails> checkstatus(@PathVariable Long id) {
		Optional<User> userobj = userrepo.findById(id);
		Optional<JobProcessDetails> user = jobprocessrepo.findByUser(userobj);

		if (user.isPresent()) {
			return user;
		} // System.out.println(user);
		return null;

	}

	// ***********************
	@RequestMapping(value = "/applyjob", method = RequestMethod.POST)
	public JobProcessDetails applyforjob( @RequestBody JobProcessDetails jobprocess)
	{
//		JobProcessDetails jobprocess=new JobProcessDetails();
//		System.out.println(properties);
//		System.out.println(file);
//		
//		CommonsMultipartFile upfile = (CommonsMultipartFile)  file;
//		jobprocess.setResume(upfile);
		
		//have to find objects for job id and user id
		System.out.println(jobprocess);
		JobProcessDetails job=jobprocessrepo.save(jobprocess);
		return job;
	}
}