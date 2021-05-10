Feature: Agendar creacion de post

  @user1 @web
  Scenario: Como usuario quiero agendar la creacion de un post y luego limpiarlo
    Given I navigate to page "http://localhost:2368/ghost/"
    Then I enter "administrador123@example.com" into input field having css selector "[name='identification']"
    Then I enter "administrador123" into input field having css selector "[name='password']"
    Then I click on element having css selector ".login"
    Then I navigate to menu "posts/"
    Then I create new "post/"
    Then I enter "Post agendado con fecha" into input field having css selector "[placeholder='Post Title']"
    Then I schedule publish post
    Then I delete current draft