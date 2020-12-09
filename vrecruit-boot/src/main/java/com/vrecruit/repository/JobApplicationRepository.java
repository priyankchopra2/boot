package com.vrecruit.repository;

import java.util.Collection;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vrecruit.entities.Interviewer;
import com.vrecruit.entities.JobApplication;

@Repository
public interface JobApplicationRepository extends JpaRepository<JobApplication, Long> {
	public Collection<JobApplication> findByInterviewer(Interviewer obj);

	public JobApplication findByJid(Long jid);
}
