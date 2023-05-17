package com.example.model;

import java.io.Serializable;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class DonateRecord implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue
    private Long id;
    @Column(nullable = false)
    private String status;
    @Column(nullable = false)
    private LocalDateTime applyDate;
    @Column(nullable = true)
    private LocalDateTime donationStartDate;
    @Column(nullable = true)
    private LocalDateTime donationEndDate;
    @ManyToOne
    @JoinColumn(nullable = false, name = "member_id", referencedColumnName = "id")
    private Member member;
    @ManyToOne
    @JoinColumn(nullable = false, name = "animal_id", referencedColumnName = "id")
    private Animal animal;
    @ManyToOne
    @JoinColumn(nullable = false, name = "donate_plan_id", referencedColumnName = "id")
    private DonatePlan donatePlan;

    public DonateRecord() {
        super();
    }

    public DonateRecord(String status, LocalDateTime applyDate, LocalDateTime donationStartDate,
            LocalDateTime donationEndDate, Member member, Animal animal, DonatePlan donatePlan) {
        super();
        this.status = status;
        this.applyDate = applyDate;
        this.donationStartDate = donationStartDate;
        this.donationEndDate = donationEndDate;
        this.member = member;
        this.animal = animal;
        this.donatePlan = donatePlan;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getApplyDate() {
        return applyDate;
    }

    public void setApplyDate(LocalDateTime applyDate) {
        this.applyDate = applyDate;
    }

    public LocalDateTime getDonationStartDate() {
        return donationStartDate;
    }

    public void setDonationStartDate(LocalDateTime donationStartDate) {
        this.donationStartDate = donationStartDate;
    }

    public LocalDateTime getDonationEndDate() {
        return donationEndDate;
    }

    public void setDonationEndDate(LocalDateTime donationEndDate) {
        this.donationEndDate = donationEndDate;
    }

    public Member getMember() {
        return member;
    }

    public void setMember(Member member) {
        this.member = member;
    }

    public Animal getAnimal() {
        return animal;
    }

    public void setAnimal(Animal animal) {
        this.animal = animal;
    }

    public DonatePlan getDonatePlan() {
        return donatePlan;
    }

    public void setDonatePlan(DonatePlan donatePlan) {
        this.donatePlan = donatePlan;
    }

}