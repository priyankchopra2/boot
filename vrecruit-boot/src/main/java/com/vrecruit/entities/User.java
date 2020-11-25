package com.vrecruit.entities;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "candidate")
public class User {
	
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "id")
	    private int id;
	 
	 private String username;
	
	  private String password;
	  @DateTimeFormat(pattern = "dd/MM/yyyy")
	  @Temporal(value=TemporalType.DATE)

	  private Date dob;
	
	  private String email;
	  private String phone;
	  
	  @OneToOne(mappedBy="user",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
		@JoinColumn(name = "jid")
  	private JobProcessDetails jobprocessdetails;
	 
	  public String getUsername() {
	    return username;
	  }

	  public int getId() {
	        return id;
	    }

	    public void setId(int id) {
	        this.id = id;
	    }

	  public void setUsername(String username) {
	    this.username = username;
	  }

	  public String getPassword() {
	    return password;
	  }

	  public void setPassword(String password) {
	    this.password = password;
	  }

	
	  public String getEmail() {
	    return email;
	  }

	  public void setEmail(String email) {
	    this.email = email;
	  }

	
	  public String getPhone() {
	    return phone;
	  }

	  public void setPhone(String phone) {
	    this.phone = phone;
	  }
	  public Date getDob() {
		    return dob;
		  }

		  public void setDob(Date dob) {
		    this.dob = dob;
		  }
		  
		  
		  public JobProcessDetails getJobProcessDetails() {
		        return jobprocessdetails;
		    }
		 
		    public void setJobProcessDetails(JobProcessDetails jobprocessdetails) {
		        this.jobprocessdetails = jobprocessdetails;
		    }
		  
		  
	  @Override
		public String toString() {
			return "User [id=" + id +"username=" + username + ", password=" + password  + ", dob=" + dob+", email=" + email + ",phone="+phone+"]";
		}

}