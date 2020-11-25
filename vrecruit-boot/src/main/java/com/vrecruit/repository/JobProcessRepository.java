package com.vrecruit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vrecruit.entities.JobProcessDetails;

@Repository
public interface JobProcessRepository extends JpaRepository<JobProcessDetails, Long> {

}
