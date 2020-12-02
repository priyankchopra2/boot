package com.vrecruit.controllers;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vrecruit.entities.Interviewer;
import com.vrecruit.repository.InterviewerRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class InterviewerController {

	@Autowired
	InterviewerRepository interviewerRepo;

	// interviewer login
	@PostMapping(value = "/interviewer/login")
	public ResponseEntity<?> login(@RequestBody Interviewer interviewerReq)
			throws URISyntaxException {

		String email=interviewerReq.getEmail();
		String password=interviewerReq.getPassword();
		Optional<Interviewer> interviewer = interviewerRepo.findByEmail(email);

		if (interviewer.isPresent()) {
			if (interviewer.get().getPassword().equals(password)) {
				return ResponseEntity.created(new URI("/api/employee/" + interviewer.get().getId()))
						.body(interviewer.get());
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
			}
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@GetMapping(value = "/getAll")
	public Collection<Interviewer> getAll() throws URISyntaxException {

//    	Getting list of interviewer from database
		return interviewerRepo.findAll();

	}

}
