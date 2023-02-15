Feature: support portal on bt3-test

Scenario: creating Account

Given I created the Account from API
And I do the Login with my user by entering  email address as 
"Farah.alaa@vodafone.com" and password as "Vod@Far123"
And I do the assertions for login Button
Then do the search for Account 
And verify that Account existed and select it successfully 