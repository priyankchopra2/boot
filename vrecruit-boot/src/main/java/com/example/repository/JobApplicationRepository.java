package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entities.JobApplication;

@Repository
public interface JobApplicationRepository extends JpaRepository<JobApplication,Long>{

}
