$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:facebook.feature");
formatter.feature({
  "name": "Facebook Create new accounts",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@creatNewAccount"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Fill the given credentials for create a new account",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Click on the First Name field and enter \"\u003cFirstname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User Click on the Surname field and enter \"\u003cSurename\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User Click on the Email Address field and enter \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User Click on the Password field and enter \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User Click on the sort dropdown and Select date of birth \"\u003cDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User Click on the sort dropdown and Select date of month \"\u003cMonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User Click on the sort dropdown and Select date of Year \"\u003cYear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User Click on the radio button to select the option",
  "keyword": "And "
});
formatter.step({
  "name": "User Click on the SignIn button",
  "keyword": "And "
});
formatter.step({
  "name": "Manually capture a screenshot of the registration form with the entered details for validation \"\u003cFirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Quit the browser.",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Surename",
        "Email",
        "Password",
        "Date",
        "Month",
        "Year"
      ]
    },
    {
      "cells": [
        "sriram",
        "sri",
        "sri@gmail.com",
        "sri231",
        "23",
        "Mar",
        "1996"
      ]
    },
    {
      "cells": [
        "palani",
        "murugan",
        "palanimurgan@gmail.com",
        "palni32",
        "19",
        "Apr",
        "1998"
      ]
    },
    {
      "cells": [
        "parthipan",
        "krish",
        "parthithikrish@gmail.com",
        "parthi42",
        "21",
        "Jun",
        "1997"
      ]
    },
    {
      "cells": [
        "gunal",
        "raj",
        "gunalraj@gmail.com",
        "gunal420",
        "20",
        "Aug",
        "2002"
      ]
    },
    {
      "cells": [
        "sreyan",
        "kumar",
        "sreyankumar@gmail.com",
        "sreyan34",
        "32",
        "Dec",
        "1992"
      ]
    }
  ]
});
formatter.background({
  "name": "Facebook Launching function",
  "description": "",
  "keyword": "Background"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the Facebook",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewAccount.launch_the_Facebook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to Create new account",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewAccount.navigate_to_Create_new_account()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Fill the given credentials for create a new account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@creatNewAccount"
    }
  ]
});
formatter.step({
  "name": "User Click on the First Name field and enter \"sriram\"",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_First_Name_field_and_enter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click on the Surname field and enter \"sri\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_Surname_field_and_enter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click on the Email Address field and enter \"sri@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_Email_Address_field_and_enter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click on the Password field and enter \"sri231\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_Password_field_and_enter(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click on the sort dropdown and Select date of birth \"23\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_sort_dropdown_and_Select_date_of_birth(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click on the sort dropdown and Select date of month \"Mar\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_sort_dropdown_and_Select_date_of_month(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click on the sort dropdown and Select date of Year \"1996\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_sort_dropdown_and_Select_date_of_Year(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click on the radio button to select the option",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_radio_button_to_select_the_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click on the SignIn button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_SignIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Manually capture a screenshot of the registration form with the entered details for validation \"sriram\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.manually_capture_a_screenshot_of_the_registration_form_with_the_entered_details_for_validation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Quit the browser.",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewAccount.quit_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Facebook Launching function",
  "description": "",
  "keyword": "Background"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the Facebook",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewAccount.launch_the_Facebook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to Create new account",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewAccount.navigate_to_Create_new_account()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Fill the given credentials for create a new account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@creatNewAccount"
    }
  ]
});
formatter.step({
  "name": "User Click on the First Name field and enter \"palani\"",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_First_Name_field_and_enter(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00274.10.0\u0027, revision: \u0027c14d967899\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.10\u0027\nDriver info: org.openqa.selenium.edge.EdgeDriver\nCommand: [null, findElement {using\u003dxpath, value\u003d//input[@name\u003d\u0027firstname\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: MicrosoftEdge, browserVersion: 122.0.2365.66, fedcm:accounts: true, ms:edgeOptions: {debuggerAddress: localhost:58175}, msedge: {msedgedriverVersion: 122.0.2365.66 (ab363614b8f0..., userDataDir: C:\\Users\\srira\\AppData\\Loca...}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:58175/devtoo..., se:cdpVersion: 122.0.2365.66, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:531)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:350)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy22.sendKeys(Unknown Source)\r\n\tat com.facebook.basefunctions.BaseClass.insertText(BaseClass.java:75)\r\n\tat com.facebook.CreateNewAccount.user_Click_on_the_First_Name_field_and_enter(CreateNewAccount.java:35)\r\n\tat ✽.User Click on the First Name field and enter \"palani\"(file:facebook.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User Click on the Surname field and enter \"murugan\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_Surname_field_and_enter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on the Email Address field and enter \"palanimurgan@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_Email_Address_field_and_enter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on the Password field and enter \"palni32\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_Password_field_and_enter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on the sort dropdown and Select date of birth \"19\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_sort_dropdown_and_Select_date_of_birth(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on the sort dropdown and Select date of month \"Apr\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_sort_dropdown_and_Select_date_of_month(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on the sort dropdown and Select date of Year \"1998\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_sort_dropdown_and_Select_date_of_Year(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on the radio button to select the option",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_radio_button_to_select_the_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on the SignIn button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_SignIn_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Manually capture a screenshot of the registration form with the entered details for validation \"palani\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.manually_capture_a_screenshot_of_the_registration_form_with_the_entered_details_for_validation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Quit the browser.",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewAccount.quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Facebook Launching function",
  "description": "",
  "keyword": "Background"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the Facebook",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewAccount.launch_the_Facebook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to Create new account",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewAccount.navigate_to_Create_new_account()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Fill the given credentials for create a new account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@creatNewAccount"
    }
  ]
});
formatter.step({
  "name": "User Click on the First Name field and enter \"parthipan\"",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_First_Name_field_and_enter(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00274.10.0\u0027, revision: \u0027c14d967899\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.10\u0027\nDriver info: org.openqa.selenium.edge.EdgeDriver\nCommand: [null, findElement {using\u003dxpath, value\u003d//input[@name\u003d\u0027firstname\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: MicrosoftEdge, browserVersion: 122.0.2365.66, fedcm:accounts: true, ms:edgeOptions: {debuggerAddress: localhost:58175}, msedge: {msedgedriverVersion: 122.0.2365.66 (ab363614b8f0..., userDataDir: C:\\Users\\srira\\AppData\\Loca...}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:58175/devtoo..., se:cdpVersion: 122.0.2365.66, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:531)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:350)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy22.sendKeys(Unknown Source)\r\n\tat com.facebook.basefunctions.BaseClass.insertText(BaseClass.java:75)\r\n\tat com.facebook.CreateNewAccount.user_Click_on_the_First_Name_field_and_enter(CreateNewAccount.java:35)\r\n\tat ✽.User Click on the First Name field and enter \"parthipan\"(file:facebook.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User Click on the Surname field and enter \"krish\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_Surname_field_and_enter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on the Email Address field and enter \"parthithikrish@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_Email_Address_field_and_enter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on the Password field and enter \"parthi42\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_Password_field_and_enter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on the sort dropdown and Select date of birth \"21\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_sort_dropdown_and_Select_date_of_birth(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on the sort dropdown and Select date of month \"Jun\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_sort_dropdown_and_Select_date_of_month(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on the sort dropdown and Select date of Year \"1997\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_sort_dropdown_and_Select_date_of_Year(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on the radio button to select the option",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_radio_button_to_select_the_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on the SignIn button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_SignIn_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Manually capture a screenshot of the registration form with the entered details for validation \"parthipan\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.manually_capture_a_screenshot_of_the_registration_form_with_the_entered_details_for_validation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Quit the browser.",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewAccount.quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Facebook Launching function",
  "description": "",
  "keyword": "Background"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the Facebook",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewAccount.launch_the_Facebook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to Create new account",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewAccount.navigate_to_Create_new_account()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Fill the given credentials for create a new account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@creatNewAccount"
    }
  ]
});
formatter.step({
  "name": "User Click on the First Name field and enter \"gunal\"",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_First_Name_field_and_enter(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00274.10.0\u0027, revision: \u0027c14d967899\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.10\u0027\nDriver info: org.openqa.selenium.edge.EdgeDriver\nCommand: [null, findElement {using\u003dxpath, value\u003d//input[@name\u003d\u0027firstname\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: MicrosoftEdge, browserVersion: 122.0.2365.66, fedcm:accounts: true, ms:edgeOptions: {debuggerAddress: localhost:58175}, msedge: {msedgedriverVersion: 122.0.2365.66 (ab363614b8f0..., userDataDir: C:\\Users\\srira\\AppData\\Loca...}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:58175/devtoo..., se:cdpVersion: 122.0.2365.66, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:531)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:350)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy22.sendKeys(Unknown Source)\r\n\tat com.facebook.basefunctions.BaseClass.insertText(BaseClass.java:75)\r\n\tat com.facebook.CreateNewAccount.user_Click_on_the_First_Name_field_and_enter(CreateNewAccount.java:35)\r\n\tat ✽.User Click on the First Name field and enter \"gunal\"(file:facebook.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User Click on the Surname field and enter \"raj\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_Surname_field_and_enter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on the Email Address field and enter \"gunalraj@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_Email_Address_field_and_enter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on the Password field and enter \"gunal420\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_Password_field_and_enter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on the sort dropdown and Select date of birth \"20\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_sort_dropdown_and_Select_date_of_birth(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on the sort dropdown and Select date of month \"Aug\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_sort_dropdown_and_Select_date_of_month(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on the sort dropdown and Select date of Year \"2002\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_sort_dropdown_and_Select_date_of_Year(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on the radio button to select the option",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_radio_button_to_select_the_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on the SignIn button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_SignIn_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Manually capture a screenshot of the registration form with the entered details for validation \"gunal\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.manually_capture_a_screenshot_of_the_registration_form_with_the_entered_details_for_validation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Quit the browser.",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewAccount.quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Facebook Launching function",
  "description": "",
  "keyword": "Background"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the Facebook",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewAccount.launch_the_Facebook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to Create new account",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateNewAccount.navigate_to_Create_new_account()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Fill the given credentials for create a new account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@creatNewAccount"
    }
  ]
});
formatter.step({
  "name": "User Click on the First Name field and enter \"sreyan\"",
  "keyword": "When "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_First_Name_field_and_enter(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00274.10.0\u0027, revision: \u0027c14d967899\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.10\u0027\nDriver info: org.openqa.selenium.edge.EdgeDriver\nCommand: [null, findElement {using\u003dxpath, value\u003d//input[@name\u003d\u0027firstname\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: MicrosoftEdge, browserVersion: 122.0.2365.66, fedcm:accounts: true, ms:edgeOptions: {debuggerAddress: localhost:58175}, msedge: {msedgedriverVersion: 122.0.2365.66 (ab363614b8f0..., userDataDir: C:\\Users\\srira\\AppData\\Loca...}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:58175/devtoo..., se:cdpVersion: 122.0.2365.66, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:531)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:350)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy22.sendKeys(Unknown Source)\r\n\tat com.facebook.basefunctions.BaseClass.insertText(BaseClass.java:75)\r\n\tat com.facebook.CreateNewAccount.user_Click_on_the_First_Name_field_and_enter(CreateNewAccount.java:35)\r\n\tat ✽.User Click on the First Name field and enter \"sreyan\"(file:facebook.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User Click on the Surname field and enter \"kumar\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_Surname_field_and_enter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on the Email Address field and enter \"sreyankumar@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_Email_Address_field_and_enter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on the Password field and enter \"sreyan34\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_Password_field_and_enter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on the sort dropdown and Select date of birth \"32\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_sort_dropdown_and_Select_date_of_birth(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on the sort dropdown and Select date of month \"Dec\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_sort_dropdown_and_Select_date_of_month(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on the sort dropdown and Select date of Year \"1992\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_sort_dropdown_and_Select_date_of_Year(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on the radio button to select the option",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_radio_button_to_select_the_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on the SignIn button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.user_Click_on_the_SignIn_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Manually capture a screenshot of the registration form with the entered details for validation \"sreyan\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewAccount.manually_capture_a_screenshot_of_the_registration_form_with_the_entered_details_for_validation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Quit the browser.",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateNewAccount.quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});