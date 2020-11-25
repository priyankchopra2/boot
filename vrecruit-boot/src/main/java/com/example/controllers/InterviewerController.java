package com.example.controllers;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.entities.Interviewer;
import com.example.repository.InterviewerRepository;

@RestController
public class InterviewerController {


	@Autowired
	InterviewerRepository interviewerDao;

	List<Interviewer> lst;

	@GetMapping("/create")
	public ModelAndView create(ModelAndView m) {
		m.setViewName("createInterviewer");
		m.addObject("interviewer", new Interviewer());
		return m;
	}

//	@PostMapping(value = "/add")
//	public ResponseEntity<?> add(@RequestBody InterviewerPOJO obj, BindingResult br) throws URISyntaxException {
//		ModelAndView m = new ModelAndView();
//
//		m.setViewName("InterviewerList");
////    	Setting object from form to db
//
//		Interviewer a = new Interviewer();
//		BeanUtils.copyProperties(obj, a);
//
//		interviewerDao.save(a);
//
////    	Getting list of interviewer from database
//		lst = interviewerDao.getAll();
//
//		m.addObject("lst", lst);
//
//		return ResponseEntity.created(new URI("/api/pooling" + interviewerDao.getAll())).body("");
//	}

	@GetMapping(value = "/getAll")
	public Collection<Interviewer> getAll() throws URISyntaxException {

//    	Getting list of interviewer from database
		return interviewerDao.findAll();

	}

	@GetMapping(value = "/dashboard")
	public ModelAndView show(HttpServletRequest request) {
		ModelAndView m = new ModelAndView();
		HttpSession session = request.getSession();

		if (session.getAttribute("interviewerId") == null) {
			// can throw exception here or return to home page

			m.setViewName(LOGIN);
		} else {
			m.setViewName("interviewerDashboard");
		}

		return m;
	}

//	@GetMapping(value = "/login")
//	public ModelAndView login() {
//		ModelAndView m = new ModelAndView();
//
//		m.setViewName(LOGIN);
//
////    	Getting list of interviewer from database
//		lst = interviewerDao.getAll();
//
//		return m;
//	}
//
//	@GetMapping(value = "/ilogout")
//	public ModelAndView logout(HttpServletRequest request) {
//		ModelAndView m = new ModelAndView();
//		HttpSession session = request.getSession();
//		session.invalidate();
//		m.setViewName(LOGIN);
//		return m;
//	}
//
//	@PostMapping(value = "/loginAction")
//	public ModelAndView loginAction(@RequestParam String email, @RequestParam String password,
//			HttpServletRequest request) {
//		ModelAndView m = new ModelAndView();
//
//		lst = interviewerDao.getAll();
//		Interviewer res = new Interviewer();
//		try {
//			List<Interviewer> s = lst.stream().filter(e -> e.getEmail().equals(email)).collect(Collectors.toList());
//
//			for (Interviewer o : s) {
//				logger.info(o);
//				res = o;
//			}
//
//			if (res.getPassword().equals(password)) {
//				HttpSession session = request.getSession();
//				session.setAttribute("interviewerId", res.getId());
//				session.setAttribute("interviewerName", res.getName());
//				m.addObject("id", res.getId());
//				m.addObject("name", res.getName());
//				m.setViewName("interviewerDashboard");
//			} else {
//				m.setViewName(LOGIN);
//			}
//
//			m.addObject("lst", lst);
//		} catch (NullPointerException e) {
//			throw new NullPointerException("USER DOES NOT EXIST...");
//		}
//		return m;
//	}
//
//	@ExceptionHandler({ NullPointerException.class })
//	public ModelAndView handleIOException(Exception ex) {
//		ModelAndView model = new ModelAndView("jobAppDeleteError");
//
//		model.addObject("exception", ex.getMessage());
//
//		return model;
//	}

}
