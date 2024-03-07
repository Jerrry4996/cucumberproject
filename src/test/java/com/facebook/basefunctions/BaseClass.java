package com.facebook.basefunctions;

import java.io.File;     
import java.io.IOException;
import java.time.Duration;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Alert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {
	public static BaseClass base = null; // object ref name 
//	//using constructor we can stop the multiple object creation
	public BaseClass () {}
	
	public static BaseClass getInstance () {
		if (base==(null)) {
			base = new BaseClass ();
			
		}
		return base;
		
	}
//	
	public static WebDriver driver;
	public static Actions actions;
	public static JavascriptExecutor js;
	public static Wait  wait;
	public static void browserLaunch () {
		 WebDriverManager.edgedriver().setup();
		    EdgeOptions options = new EdgeOptions();
			options.addArguments("start-maximized");
			driver = new EdgeDriver(options);
			actions = new Actions(driver); 
			js = (JavascriptExecutor)driver;
			wait = new WebDriverWait(driver, Duration.ofSeconds(20));
//			driver.get(string);
		
	}
	public static void goToUrl(String url) {
		driver.get(url);
		
	}
	
	public static void browserClose () {
		driver.quit();
	}
	
	public void pageRefresh() {
		driver.navigate().refresh();
	}
	
	public String titleName() {
		String title = driver.getTitle();
		return title;
		
	}
	public void insertText (WebElement ele, String value) {
		ele.sendKeys(value);
		
		}
	public void button (WebElement ele) {
		 try {
		        ele.click();
		    } catch (Exception e) {
		        // Log the exception or handle it as needed
		        e.printStackTrace();
		    }
		}
	
	
	public boolean displayed(WebElement ele) {
		boolean displayed = ele.isDisplayed();
		return displayed;
		
	}
	
	public boolean selectedOfElement(WebElement ele) {
		boolean selected = ele.isSelected();
		return selected;
		
	}
	
	public boolean enabled (WebElement ele) {
		boolean enabled = ele.isEnabled();
		return enabled;
	}
	
	public String retrieveText (WebElement ele) {
	       String string = ele.getText();
		return string;
		
	}
	
	public String attribute(WebElement ele,String attribute) {
		String attributedname = ele.getAttribute(attribute);
		return attributedname;
	}
	
	public void gotoElement(WebElement ele) {
		actions.moveToElement(ele).build().perform();
		
	}
	
	public void rightClick (WebElement ele) {
		actions.contextClick(ele).build().perform();
		
	}
	
	public void twoClick(WebElement ele) {
		actions.doubleClick(ele).build().perform();
	}
	
	public void moveOneElementToAnother(WebElement source,WebElement target) {
		actions.dragAndDrop(source, target).build().perform();
	}
	
	public void insertText (String value , WebElement ele) {
		actions.sendKeys(ele,value).build().perform();
		
	}
	public void button (WebElement ele ,int x ) {
		actions.click(ele).build().perform();
		
	}
	
	public void screenshot (String Firstname ) throws IOException  {
		TakesScreenshot tk = (TakesScreenshot)driver;
		File src = tk.getScreenshotAs(OutputType.FILE);
		File desc = new File("C:\\Users\\srira\\eclipse-workspace\\com.facebook\\target\\takes\\"+Firstname+"F1.png");
		FileUtils.copyFile(src, desc);
	   
	}
	
	public 	void scrollDown(WebElement ele) {
		js.executeScript("arguments[0].scrollIntoView(true)", ele);
		
	}
	
	public void scrollUp (WebElement ele) {
		
		js.executeScript("arguments[0].scrollIntoView(falae)", ele);
	}
	
	public void inserText (WebElement ele,String value , String javascript) {
		js.executeScript("arguments[0].setAttribute('value', "+value+"')", ele);
			
	}
	
	public void button (WebElement ele,String javascript) {
		js.executeScript("arguments[0].click", ele);
		
	}
	public void selectVisibleText (WebElement dropdown, String visibleText) {
		Select s = new Select (dropdown);
		s.selectByVisibleText(visibleText);
		
	}
	
	public void selectValue(WebElement dropdown,String value) {
		Select s = new Select (dropdown);
		s.selectByValue(value);
	}
	
	public List<WebElement> selectOptions(WebElement dropdown){
	
	Select s = new Select (dropdown);
	List<WebElement> options = s.getOptions();
	return options;
	
	}
	
	public void selectIndex(WebElement dropdown, int value) {
		Select s = new Select (dropdown);
		s.selectByIndex(value);
	}
	
	public void defaultFrame () {
		driver.switchTo().defaultContent();
	}
	
	public void previousFrame () {
		driver.switchTo().parentFrame();
	}
	
	public void nextFrame(WebElement ele) {
		driver.switchTo().frame(ele);

	}
	
	public void nextFrameIndex(int value) {
		driver.switchTo().frame(value);
	}
	
	public void nextFrameString(String value) {
		driver.switchTo().frame(value);
		
	}
	
	public Alert popup () {
		Alert alert = driver.switchTo().alert();
		return alert;
	}
	
	public void alertAccept (Alert alert) {
		alert.accept();
	}
	
	public void alertDismiss(Alert alert) {
		alert.dismiss();
	}
	
	public void alretInsertText(Alert alert,String value) {
		alert.sendKeys(value);
		
	}
	
	public String alertGetText (Alert alert) {
		String text = alert.getText();
		return text;
	}
	
	public String handlingWindow() {
		String windowHandle = driver.getWindowHandle();
		return windowHandle;
			
	}
	
	public Set<String> handlingWindows () {
		Set<String> windowHandles = driver.getWindowHandles();
		return windowHandles;
		
	}
	
	public void impWaits(int value) {
		driver.manage().timeouts().implicitlyWait(value,TimeUnit.SECONDS);
		}
	
	public void expWaits (Duration value) {
		WebDriverWait wait = new WebDriverWait(driver,value);
		wait.until(ExpectedConditions.visibilityOf(null));
	}
	
	public void flueWait () {
	//	wait fwait = new FluentWait(driver).withTimeout(value,).pollingEvery(Values,)
	}
	
	public static void curenttabclose() {
		driver.close();
	}
	

}
