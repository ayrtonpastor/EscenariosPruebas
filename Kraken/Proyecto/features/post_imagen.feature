Feature: Cambiar dueño de post

  @user1 @web
  Scenario: Como usuario quiero crear un post como draft, agregarle una imagen, publicarlo y limpiarlo
    Given I navigate to page "http://localhost:2368/ghost/"
    Then I enter "administrador123@example.com" into input field having css selector "[name='identification']"
    Then I enter "administrador123" into input field having css selector "[name='password']"
    Then I click on element having css selector ".login"
    Then I navigate to menu "posts/"
    Then I create new "post/"
    Then I enter "Post con imagen" into input field having css selector "[placeholder='Post Title']"
    Then I enter image content to post
    Then I "Publish" current "Post"
    Then I delete current draft
