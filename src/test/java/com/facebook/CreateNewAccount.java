package com.facebook;

import java.io.IOException;

import com.facebook.basefunctions.BaseClass;
import com.facebook.locators.FaceBookNewRegLocators;

import io.cucumber.java.en.Given; 
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class CreateNewAccount {
	public static BaseClass base = BaseClass.getInstance();
	public static FaceBookNewRegLocators locators = new FaceBookNewRegLocators ();
//	@Given("Launch the Facebook {string}")
//	public void launch_the_Facebook(String url) {
//	   base.browserLaunch();
//	   base.goToUrl(url);
//	}
	
	@Given("Launch the Facebook")
	public void launch_the_Facebook() {
		// base.browserLaunch();
	}

	@Given("Navigate to Create new account")
	public void navigate_to_Create_new_account() throws Exception {
		
	    base.button(locators.getCreateaccount());
	    Thread.sleep(3000);
	}

	@When("User Click on the First Name field and enter {string}")
	public void user_Click_on_the_First_Name_field_and_enter(String Firstname) {
	    base.insertText(locators.getFirstname(), Firstname);
	}

	@When("User Click on the Surname field and enter {string}")
	public void user_Click_on_the_Surname_field_and_enter(String Surename) {
	    base.insertText(locators.getSurname(), Surename);
	}

	@When("User Click on the Email Address field and enter {string}")
	public void user_Click_on_the_Email_Address_field_and_enter(String Email) {
	    base.insertText(locators.getEmail(), Email);
	}

	@When("User Click on the Password field and enter {string}")
	public void user_Click_on_the_Password_field_and_enter(String Password) {
	   base.insertText(locators.getPassword(), Password);
	}

	@When("User Click on the sort dropdown and Select date of birth {string}")
	public void user_Click_on_the_sort_dropdown_and_Select_date_of_birth(String Date) {
		base.button(locators.getDateDropDown());
		base.selectOptions(locators.getDateDropDown());
		base.selectVisibleText(locators.getDateDropDown(), Date);
	}

	@When("User Click on the sort dropdown and Select date of month {string}")
	public void user_Click_on_the_sort_dropdown_and_Select_date_of_month(String Month) {
		base.button(locators.getMonthDropDown());
		base.selectOptions(locators.getMonthDropDown());
		base.selectVisibleText(locators.getMonthDropDown(), Month);;
	}

	@When("User Click on the sort dropdown and Select date of Year {string}")
	public void user_Click_on_the_sort_dropdown_and_Select_date_of_Year(String Year) {
		base.button(locators.getYearDropDown());
		base.selectOptions(locators.getYearDropDown());
		base.selectVisibleText(locators.getYearDropDown(), Year);
	}

	@When("User Click on the radio button to select the option")
	public void user_Click_on_the_radio_button_to_select_the_option() {
		 base.button(locators.getGenter());
	}

	@When("User Click on the SignIn button")
	public void user_Click_on_the_SignIn_button() {
		base.button(locators.getSignin());
	}

	@When("Manually capture a screenshot of the registration form with the entered details for validation {string}")
	public void manually_capture_a_screenshot_of_the_registration_form_with_the_entered_details_for_validation(String Firstname) throws IOException {
		  base.screenshot(Firstname);	
	}

	@Then("Quit the browser.")
	public void quit_the_browser() {
		 base.browserClose();
	}


}
