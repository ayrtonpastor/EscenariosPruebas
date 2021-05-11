Feature: Cambiar contrasena de usuario Ghost

  @user1 @web
  Scenario: Como usuario quiero cambiar la contrasena del usuario Ghost
    Given I navigate to page "http://localhost:2368/ghost/"
    Then I login with credentials
    Then I navigate to menu "staff/"
    Then I go to config user "Ghost"
    Then I enter "1234567890$" into input field having css selector "[id='user-password-new']"
    Then I enter "1234567890$" into input field having css selector "[id='user-new-password-verification']"
    Then I click on "Change Password" button
    Then I close popup
    Then I close session
    Then I enter "ghost-author@example.com" into input field having css selector "[name='identification']"
    Then I enter "1234567890$" into input field having css selector "[name='password']"
    Then I click on element having css selector ".login"
    Then I verify is logged with the username: "Ghost"
