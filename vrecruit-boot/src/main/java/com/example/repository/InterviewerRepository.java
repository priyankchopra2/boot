package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entities.Interviewer;

@Repository
public interface InterviewerRepository extends JpaRepository<Interviewer,Long> {
	
}
