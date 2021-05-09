Feature: Crear draft de pagina

  @user1 @web
  Scenario: Como usuario quiero crear una pagina como draft, verificar que existe y limpiarla
    Given I navigate to page "http://localhost:2368/ghost/"
    Then I enter "administrador123@example.com" into input field having css selector "[name='identification']"
    Then I enter "administrador123" into input field having css selector "[name='password']"
    Then I click on element having css selector ".login"
    Then I navigate to menu "pages/"
    Then I create new "page/"
    Then I enter "Pagina Nueva" into input field having css selector "[placeholder='Page Title']"
    Then I save draft "pages/"
    Then I click on list element with title "Pagina Nueva"
    Then I delete current draft