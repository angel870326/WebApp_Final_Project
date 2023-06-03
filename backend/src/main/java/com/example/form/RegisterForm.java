package com.example.form;

public class RegisterForm {

    private String account;
    private String name;
    private String email;
    private String phone;
    private String password;
    private Boolean anonymous;

    public RegisterForm() {
        super();
    }

    public RegisterForm(String account, String name, String email, String phone, String password, Boolean anonymous) {
        super();
        this.account = account;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.anonymous = anonymous;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getAnonymous() {
        return anonymous;
    }

    public void setAnonymous(Boolean anonymous) {
        this.anonymous = anonymous;
    }

}
