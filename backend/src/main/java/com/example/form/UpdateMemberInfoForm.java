package com.example.form;

public class UpdateMemberInfoForm {

	private String name;
	private String password;
	private String email;
	private String phone;
	private Boolean anonymous;

	public UpdateMemberInfoForm() {
		super();
	}

	public UpdateMemberInfoForm(String name, String password, String email, String phone, Boolean anonymous) {
		super();
		this.name = name;
		this.password = password;
		this.email = email;
		this.phone = phone;
		this.anonymous = anonymous;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public Boolean getAnonymous() {
		return anonymous;
	}

	public void setAnonymous(Boolean anonymous) {
		this.anonymous = anonymous;
	}

}
