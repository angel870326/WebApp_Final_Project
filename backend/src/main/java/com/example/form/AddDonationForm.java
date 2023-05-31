package com.example.form;

public class AddDonationForm {

	private String option;
	private Long animalId;

	public AddDonationForm() {
		super();
	}

	public AddDonationForm(String option, Long animalId) {
		super();
		this.option = option;
		this.animalId = animalId;
	}

	public String getOption() {
		return option;
	}

	public void setOption(String option) {
		this.option = option;
	}

	public Long getAnimalId() {
		return animalId;
	}

	public void setAnimalId(Long animalId) {
		this.animalId = animalId;
	}

}
