Feature: realizar login fallido y correcto luego cerrar sesion

  @user1 @web
  Scenario: e1, Como usuario quiero realizar login fallido y correcto luego cerrar sesion.
    Given I navigate to page with the url stored in the variable
    And I enter "asdfasdf3@example.com" into input field having css selector "[name='identification']"
    And I enter "adfagadfgdfs" into input field having css selector "[name='password']"
    And I click on element having css selector ".login"
    And I should see error
    And I clear inputs with css selectors "[name='identification']" and "[name='password']"
    And I login with credentials
    Then I verify is logged with the username from credentials
    And I navigate to menu "staff/"
    Then I logout from ghost of username from credentials
