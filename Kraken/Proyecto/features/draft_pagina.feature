Feature: Crear draft de pagina

  @user1 @web
  Scenario: e7, Como usuario quiero crear una pagina como draft, verificar que existe y limpiarla
    Given I navigate to page with the url stored in the variable
    Then I login with credentials
    Then I navigate to menu "pages/"
    Then I create new "page/"
    Then I enter "Draft pagina" into input field having css selector "[placeholder='Page Title']"
    Then I save draft "pages/"
    Then I click on list element with title "Draft pagina"
    Then I delete current draft