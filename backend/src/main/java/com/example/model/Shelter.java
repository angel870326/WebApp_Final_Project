package com.example.model;

import java.io.Serializable;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Shelter implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue
    private Long id;
    @Column(nullable = false, unique = true, length = 30)
    private String name;
    @Column(nullable = false, unique = true, length = 50)
    private String address;
    @Column(nullable = false)
    private String area;
    @Column(nullable = false, length = 10)
    private String contactPhone;
    @Column(nullable = false)
    private String contactEmail;
    @OneToMany(mappedBy = "shelter", cascade = CascadeType.ALL)
    private List<Animal> animals;

    public Shelter() {
        super();
    }

    public Shelter(String name, String address, String area, String contactPhone, String contactEmail) {
        super();
        this.name = name;
        this.address = address;
        this.area = area;
        this.contactPhone = contactPhone;
        this.contactEmail = contactEmail;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getContactPhone() {
        return contactPhone;
    }

    public void setContactPhone(String contactPhone) {
        this.contactPhone = contactPhone;
    }

    public String getContactEmail() {
        return contactEmail;
    }

    public void setContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
    }

}