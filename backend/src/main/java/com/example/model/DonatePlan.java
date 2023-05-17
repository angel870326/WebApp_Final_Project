package com.example.model;

import java.io.Serializable;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class DonatePlan implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue
    private Long id;
    @Column(nullable = false, unique = true, length = 30)
    private String name;
    @Column(nullable = false)
    private Integer duration;
    @Column(nullable = false)
    private Integer amount;
    @OneToMany(mappedBy = "donatePlan", cascade = CascadeType.ALL)
    private List<DonateRecord> donateRecord;

    public DonatePlan() {
        super();
    }

    public DonatePlan(String name, Integer duration, Integer amount) {
        super();
        this.name = name;
        this.duration = duration;
        this.amount = amount;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setEmail(Integer amount) {
        this.amount = amount;
    }

}