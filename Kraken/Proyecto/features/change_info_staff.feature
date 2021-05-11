Feature: realizar publish de una pagina y eliminarlo

  @user1 @web
  Scenario: Como usuario quiero crear una pagina, publicarla, verificar su existencia y luego eliminarla.
    Given I navigate to page "http://localhost:2369/ghost/"
    And I enter "administrador123@example.com" into input field having css selector "[name='identification']"
    And I enter "administrador123" into input field having css selector "[name='password']"
    And I click on element having css selector ".login"
    And I navigate to menu "staff/"
    And I open "Ghost" staff match info
    And I clear input with css selector "input[placeholder='Full Name']"
    And I enter "GhostX" into input field having css selector "input[placeholder='Full Name']"
    And I click on element having css selector ".gh-btn-blue"
    Then I navigate to page "http://localhost:2369/ghost/"
    And I navigate to menu "staff/"
    And I verify changed name "GhostX"
    Then I put old name back in the input who contains "GhostX" with css "input[placeholder='Full Name']"
    And I click on element having css selector ".gh-btn-blue"
