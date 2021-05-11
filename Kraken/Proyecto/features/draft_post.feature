Feature: Crear draft de post

  @user1 @web
  Scenario: Como usuario quiero crear un posts como draft, verificar que existe y limpiarla
    Given I navigate to page "http://localhost:2368/ghost"
    Then I login with credentials
    Then I navigate to menu "posts/"
    Then I create new "post/"
    Then I enter "Draft Post" into input field having css selector "[placeholder='Post Title']"
    Then I save draft "posts/"
    Then I click on list element with title "Draft Post"
    Then I delete current draft