@creatNewAccount
Feature: Facebook Create new accounts

Background: Facebook Launching function
Given Launch the Facebook 
Given Navigate to Create new account


Scenario Outline: Fill the given credentials for create a new account
When User Click on the First Name field and enter "<Firstname>"
And User Click on the Surname field and enter "<Surename>"
And User Click on the Email Address field and enter "<Email>"
And User Click on the Password field and enter "<Password>"
And User Click on the sort dropdown and Select date of birth "<Date>"
And  User Click on the sort dropdown and Select date of month "<Month>"
And  User Click on the sort dropdown and Select date of Year "<Year>"
And User Click on the radio button to select the option
And User Click on the SignIn button
And Manually capture a screenshot of the registration form with the entered details for validation "<Firstname>"
Then Quit the browser.

Examples: 
|Firstname|Surename|Email                       |Password|Date|Month|Year|
|sriram   |sri     |sri@gmail.com               |sri231  |23  |Mar  |1996|
|palani   |murugan |palanimurgan@gmail.com      |palni32 |19  |Apr  |1998|
|parthipan|krish   |parthithikrish@gmail.com    |parthi42|21  |Jun  |1997|
|gunal    |raj     |gunalraj@gmail.com          |gunal420|20  |Aug  |2002|
|sreyan   |kumar   |sreyankumar@gmail.com       |sreyan34|32  |Dec  |1992|