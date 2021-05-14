Feature: Cambiar rol de usuario Ghost

  @user1 @web
  Scenario: e14, Como usuario quiero cambiar el rol del usuario Ghost
    Given I navigate to page "http://localhost:2368/ghost"
    Then I login with credentials
    Then I navigate to menu "staff/"
    Then I go to config user "Ghost"
    Then I change rol for Ghost user
    And I click on element having css selector ".gh-btn-blue"
    Then I navigate to menu "staff/"



