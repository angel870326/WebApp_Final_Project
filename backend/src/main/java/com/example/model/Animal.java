package com.example.model;

import java.io.Serializable;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
public class Animal implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue
    private Long id;
    @Column(nullable = false, length = 30)
    private String name;
    @Column(nullable = false)
    private String sex;
    @Column(nullable = false)
    private String type;
    @Column(nullable = false)
    private String appearance;
    @Column(nullable = false)
    private String personality;
    @Column(nullable = false)
    private Integer birthYear;
    @Column(nullable = false)
    private LocalDateTime shelteredDate;
    @ManyToOne
    @JoinColumn(nullable = false, name = "shelter_id", referencedColumnName = "id")
    private Shelter shelter;
    @OneToMany(mappedBy = "animal", cascade = CascadeType.ALL)
    private List<DonateRecord> donateRecord;

    public Animal() {
        super();
    }

    public Animal(String name, String sex, String type, String appearance, String personality, Integer birthYear,
            LocalDateTime shelteredDate, Shelter shelter) {
        super();
        this.name = name;
        this.sex = sex;
        this.type = type;
        this.appearance = appearance;
        this.personality = personality;
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

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getAppearance() {
        return appearance;
    }

    public void setAppearance(String appearance) {
        this.appearance = appearance;
    }

    public String getPersonality() {
        return personality;
    }

    public void setPersonality(String personality) {
        this.personality = personality;
    }

    public Integer getBirthYear() {
        return birthYear;
    }

    public void setBirthYear(Integer birthYear) {
        this.birthYear = birthYear;
    }

    public LocalDateTime getShelteredDate() {
        return shelteredDate;
    }

    public void setShelteredDate(LocalDateTime shelteredDate) {
        this.shelteredDate = shelteredDate;
    }

    public Shelter getShelter() {
        return shelter;
    }

    public void setShelter(Shelter shelter) {
        this.shelter = shelter;
    }

}