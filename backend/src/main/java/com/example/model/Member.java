package com.example.model;

import jakarta.persistence.*;
import java.io.Serializable;

import java.util.List;

@Entity
public class Member implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue
    private Long id;
    @Column(nullable = false, unique = true, length = 30)
    private String userName;
    @Column(nullable = false)
    private String passWord;
    @Column(nullable = false, unique = true)
    private String email;
    @Column(nullable = false, length = 10)
    private String phone;
    @Column(nullable = false, length = 30)
    private String nickName;
    @Column(nullable = false)
    private Boolean anonymous;
    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<DonateRecord> donateRecord;

    public Member() {
        super();
    }

    public Member(String userName, String passWord, String email, String phone, String nickName, Boolean anonymous) {
        super();
        this.userName = userName;
        this.passWord = passWord;
        this.email = email;
        this.phone = phone;
        this.nickName = nickName;
        this.anonymous = anonymous;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassWord() {
        return passWord;
    }

    public void setPassWord(String passWord) {
        this.passWord = passWord;
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

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public Boolean getAnonymous() {
        return anonymous;
    }

    public void setAnonymous(Boolean anonymous) {
        this.anonymous = anonymous;
    }

}
