Feature: support portal on bt3-test

Scenario Outline: creating Account

Given I navigate to supportportal
Given i click on Environment login button
Given I do the Login with my user by entering email "<email>" address as and password "<password>"
And I do the assertions for login Button
Then do the search for Account 
And verify that Account existed and select it successfully 
Examples: 
|email|password|
|sadasdasd|112312312|
|sadasdasd|112312312|

# Scenario: creating Account

# Given I navigate to supportportal
# Given i click on Environment login button
# Given I do the Login with my user by entering email address as and password
#  | email | password|
# | test | test11|
# # And I do the assertions for login Button
# # Then do the search for Account 
# # And verify that Account existed and select it successfully 

