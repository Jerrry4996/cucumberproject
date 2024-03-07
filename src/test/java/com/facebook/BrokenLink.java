package com.facebook;

import java.io.IOException; 
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Iterator;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.edge.EdgeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;


public class BrokenLink {
	public static void main(String[] args) throws MalformedURLException, IOException {
		WebDriverManager.edgedriver().setup();
		WebDriver driver = new EdgeDriver();
		driver.get("https://www.facebook.com/");
		driver.manage().window().maximize();
		List<WebElement> links = driver.findElements(By.tagName("link"));
		Iterator<WebElement> iterator = links.iterator(); 
		while (iterator.hasNext()) { // if we use iterator we must use while loop
			WebElement link = iterator.next();
			String href = link.getAttribute("href");
			if (href == null || href.isEmpty()) {
				System.out.println("Link not available");
			}
			else if (!href.startsWith("https://www.facebook.com")) {
				System.out.println("links not related to facebook : " + href);
				
			} else {
				HttpURLConnection http = (HttpURLConnection) (new URL(href).openConnection());
				http.setRequestMethod("HEAD");
				http.connect();
				int responseCode = http.getResponseCode();
				if (responseCode == 200) {
					System.out.println("link is not broken :" + href);
					
				}
			}
		}
		

	}

}
