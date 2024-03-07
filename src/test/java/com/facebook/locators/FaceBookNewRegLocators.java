package com.facebook.locators;
import org.openqa.selenium.WebElement;  
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.facebook.basefunctions.BaseClass;
public class FaceBookNewRegLocators  {
	
	//public static BaseClass base = BaseClass.getInstance();
		public FaceBookNewRegLocators () {
			PageFactory.initElements(BaseClass.driver, this);
		}
		// we can overcome staleElementRefranceException by using @@FindBy and using initElements
		
		public WebElement getCreateaccount() {
			return createaccount;
		}

		public WebElement getFirstname() {
			return firstname;
		}

		public WebElement getSurname() {
			return surname;
		}

		public WebElement getEmail() {
			return email;
		}

		public WebElement getPassword() {
			return password;
		}

		public WebElement getDateDropDown() {
			return dateDropDown;
		}

		public WebElement getMonthDropDown() {
			return monthDropDown;
		}

		public WebElement getYearDropDown() {
			return yearDropDown;
		}

		public WebElement getGenter() {
			return genter;
		}

		public WebElement getSignin() {
			return signin;
		}

		@FindBy(xpath= "//a[text()='Create new account']")
		private WebElement createaccount;

		
		@FindBy(xpath= "//input[@name='firstname']")
		private WebElement firstname;
		
		@FindBy(xpath= "//input[@name='lastname']")
		private WebElement surname;
		
		@FindBy (xpath ="//input[@name='reg_email__']")
		private WebElement email;
		
		@FindBy (xpath = "//input[@name='reg_passwd__']")
		private WebElement password;
		

		@FindBy (xpath = "//select[@id='day']")
		private WebElement dateDropDown;

		
		@FindBy (xpath = "//select[@id='month']")
		private WebElement monthDropDown;

		@FindBy (xpath = "//select[@id='year']")
		private WebElement yearDropDown;

		@FindBy (xpath = "//label[text()='Male']")
		private WebElement genter;
		
		@FindBy (xpath = "//button[@name='websubmit']")
		private WebElement signin;

}
