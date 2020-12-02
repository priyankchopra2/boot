package com.vrecruit.controllers;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vrecruit.entities.User;
import com.vrecruit.repository.UserRepository;

@RequestMapping("/candidate")
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	@Autowired
	private UserRepository userrepo;

	@PostMapping("/registeruser")

	public User registerUser(@RequestBody User user) throws Exception {
		String tempEmailId = user.getEmail();
		if (tempEmailId != null && !"".equals(tempEmailId)) {
			User userobj = userrepo.findByEmail(tempEmailId);
			if (userobj != null) {
				throw new Exception("user with " + tempEmailId + "is already exists");
			}
		}
		User userobj = null;
		userobj = userrepo.save(user);
		return userobj;
	}

	@GetMapping("/get/{id}")
	public Optional<User> getById(@PathVariable Long id) {
		return userrepo.findById(id);
	}

	@PostMapping("/login")

	public ResponseEntity<?> login(@RequestBody User user) throws URISyntaxException {
		String email = user.getEmail();
		String password = user.getPassword();
		Optional<User> userobj = Optional.ofNullable(userrepo.findByEmail(email));

		if (userobj.isPresent()) {
			if (userobj.get().getPassword().equals(password)) {
				return ResponseEntity.created(new URI("/api/employee/" + userobj.get().getId())).body(userobj.get());
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
			}
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@PutMapping("/update")
	public ResponseEntity<?> updatePooling(@RequestBody User user) {
		User result = userrepo.save(user);
		return ResponseEntity.ok().body(result);
	}
}