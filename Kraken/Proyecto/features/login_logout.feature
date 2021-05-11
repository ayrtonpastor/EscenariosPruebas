Feature: realizar login fallido y correcto luego cerrar sesion

  @user1 @web
  Scenario: Como usuario quiero realizar login fallido y correcto luego cerrar sesion.
    Given I navigate to page "http://localhost:2368/ghost"
    And I enter "asdfasdf3@example.com" into input field having css selector "[name='identification']"
    And I enter "adfagadfgdfs" into input field having css selector "[name='password']"
    And I click on element having css selector ".login"
    And I should see error
    And I clear inputs with css selectors "[name='identification']" and "[name='password']"
    And I enter "administrador123@example.com" into input field having css selector "[name='identification']"
    And I enter "administrador123" into input field having css selector "[name='password']"
    And I click on element having css selector ".login"
    Then I verify is logged with the username: "Ayrton Pastor C."
    And I navigate to menu "staff/"
    Then I logout from ghost of "Ayrton Pastor C."
