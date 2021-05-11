Feature: Shared board connection

  @user1 @web
  Scenario: Assign a page to a nav-bar
    Given I navigate to page "http://localhost:2369/ghost"
    When I login with credentials
    And I click on element having css selector "[href='#/pages/']"
    And I click on element having css selector "[href='#/editor/page/']"
    And I enter "Pagina para cabecera" into input field having css selector "[placeholder='Page Title']"
    And I press the key "Tab"
    And I type this "Descripción de página para cabecera"
    And I save as published "page"
    And I click on element having css selector "[href='#/pages/']"
    And I click on element having css selector "[href='#/settings/design/']"
    And I assign the page "Pagina para cabecera" to the last navigation position
    And I click on "Save" button
    And I click on element having css selector "[href='#/site/']"
    And I delete the current "page"
    And I remove the assigment of the "Pagina para cabecera"
    And I click on "Save" button
