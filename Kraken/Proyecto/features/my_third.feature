Feature: Crear draft de post

  @user1 @web
  Scenario: Como usuario quiero crear un posts como draft, verificar que existe y limpiarla
    Given I navigate to page "http://localhost:2368/ghost/"
    Then I enter "administrador123@example.com" into input field having css selector "[name='identification']"
    Then I enter "administrador123" into input field having css selector "[name='password']"
    Then I click on element having css selector ".login"
    Then I navigate to menu "posts/"
    Then I create new "post/"
    Then I enter "Post Nuevo" into input field having css selector "[placeholder='Post Title']"
    Then I save draft "posts/"
    Then I click on list element with title "Post Nuevo"
    Then I delete current draft