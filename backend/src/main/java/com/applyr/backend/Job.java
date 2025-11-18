package com.applyr.backend;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity(name = "Job")
@Table(name = "JOBS")
public class Job {

    public enum ApplicationStatus{
        Applied,
        Interview,
        Offer,
        Rejected
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "TITLE", length = 100, nullable = false, unique = false)
    private String title;

    @Column(name = "COMPANY", length = 50, nullable = false, unique = false)
    private String company;

    @Column(name = "SALARY", nullable = true, unique = false)
    private Integer salary;

    @Column(name = "LOCATION", length = 50, nullable = false, unique = false)
    private String location;

    @Column(name = "URL", columnDefinition = "TEXT", nullable = false, unique = false)
    private String URL;

    @Column(name = "DATE", nullable = false, unique = false)
    private LocalDate dateApplied;

    @Column(name = "NOTES", length = 1000, nullable = true, unique = false)
    private String notes;

    @Enumerated(EnumType.STRING)
    @Column(name = "STATUS", nullable = false, unique = false)
    private ApplicationStatus status;

    protected Job(){};

    public Job(String title, String company, Integer salary, String location, String URL, LocalDate dateApplied, String notes, ApplicationStatus status){
        this.title = title;
        this.company = company;
        this.salary = salary;
        this.location = location;
        this.URL = URL;
        this.dateApplied = dateApplied;
        this.notes = notes;
        this.status = status;
    }

    @Override
    public String toString(){
        return String.format(
            "Job[id=%d, Title=%s, Company=%s, Salary=%d, Location=%s, URL=%s, DateApplied=%s, Notes=%s, Status=%s]",
        this.id, this.title, this.company, this.salary, this.location, this.URL, this.dateApplied, this.notes, this.status);
    }

    // Getter Methods

    public Long getId(){
        return this.id;
    }

    public String getTitle(){
        return this.title;
    }

    public String getCompany(){
        return this.company;
    }

    public Integer getSalary(){
        return this.salary;
    }

    public String getLocation(){
        return this.location;
    }

    public String getURL(){
        return this.URL;
    }

    public LocalDate getDate(){
        return this.dateApplied;
    }

    public String getNotes(){
        return this.notes;
    }

    public ApplicationStatus getStatus(){
        return this.status;
    }

    // Setter Methods

    public void setTitle(String title){
        this.title = title;
    }

    public void setCompany(String company){
        this.company = company;
    }

    public void setSalary(Integer salary){
        this.salary = salary;
    }

    public void setLocation(String location){
        this.location = location;
    }

    public void setURL(String URL){
        this.URL = URL;
    }

    public void setDate(LocalDate date){
        this.dateApplied = date;
    }

    public void setNotes(String notes){
        this.notes = notes;
    }

    public void setStatus(ApplicationStatus status){
        this.status = status;
    }
    
}
