package com.vrecruit.controllers;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vrecruit.entities.JobApplication;
import com.vrecruit.entities.JobProcessDetails;
import com.vrecruit.entities.User;
import com.vrecruit.repository.JobApplicationRepository;
import com.vrecruit.repository.JobProcessRepository;
import com.vrecruit.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:4200")

@RequestMapping("/jobprocess")
@RestController
//
public class JobProcessController {
	@Autowired
	JobProcessRepository jobprocessrepo;
	@Autowired
	private UserRepository userrepo;

	@Autowired
	JobApplicationRepository jobAppRepo;

//	JobProcessDetails jobProcessDetails;
	/*
	 * @GetMapping("job/{id}") public Optional<JobProcessDetails>
	 * getByUserId(@PathVariable Long id){ Optional<User>
	 * userobj=userrepo.findById(id); Optional<JobProcessDetails>
	 * user=jobprocessrepo.findByUser(userobj); System.out.println("???");
	 * if(user.isPresent()) { return user; } return null; }
	 */

	@GetMapping("joblist/{id}")
	public Collection<JobApplication> getById(@PathVariable Long id) {
		Optional<User> userobj = userrepo.findById(id);
		Optional<JobProcessDetails> user = jobprocessrepo.findByUser(userobj);
		System.out.println("???");
		if (user.isPresent()) {
			return null;
		} // System.out.println(user);
		return jobAppRepo.findAll();

	}

	/*
	 * @GetMapping("jobprocess/{id}") public Optional<JobProcessDetails>
	 * get(@PathVariable Long id){ Optional<JobProcessDetails> job=
	 * jobprocessrepo.findByJobid(id); return job;
	 * 
	 * }
	 */
	@GetMapping("status/{id}")
	public Optional<JobProcessDetails> checkstatus(@PathVariable Long id) {
		System.out.println("ssssssttttttttaaaaaaaaaaaaaaattttttttttuuuuuuusssssss!!!!!");
		Optional<User> userobj = userrepo.findById(id);
		Optional<JobProcessDetails> user = jobprocessrepo.findByUser(userobj);

		if (user.isPresent()) {
			return user;
		} // System.out.println(user);
		return null;

	}

	// ***********************
	@PostMapping("applyjob")
	public JobProcessDetails applyforjob(@RequestBody JobProcessDetails jobprocess) {
		long id = 0;
		JobProcessDetails job = new JobProcessDetails();
		System.out.println("//" + jobprocess.getJobid());
		System.out.println("//" + jobprocess.getUser());
		job.setUser(jobprocess.getUser());
		JobApplication jobApplication = jobAppRepo.findByJid(jobprocess.getJobApplication().getJid());
		job.setJobApplication(jobApplication);
		id = jobprocess.getUser().getId();
		User user = userrepo.findById(id);
		job.setResume(jobprocess.getResume());
		job.setUser(user);
		System.out.println("//" + jobprocess.getJobApplication());
		System.out.print("//***" + jobprocess.getResume());
		jobprocessrepo.save(job);
		return job;
	}
}