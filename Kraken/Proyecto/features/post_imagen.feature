Feature: Crear un post con imagen

  @user1 @web
  Scenario: e15, Como usuario quiero crear un post como draft, agregarle una imagen, publicarlo y limpiarlo
    Given I navigate to page "http://localhost:2368/ghost"
    Then I login with credentials
    Then I navigate to menu "posts/"
    Then I create new "post/"
    Then I enter "Post con imagen" into input field having css selector "[placeholder='Post Title']"
    Then I enter image content to post
    Then I "Publish" current "Post"
    Then I delete current draft
