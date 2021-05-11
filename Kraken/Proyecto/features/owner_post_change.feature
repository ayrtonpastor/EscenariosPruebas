Feature: Cambiar dueño de post

  @user1 @web
  Scenario: Como usuario quiero crear un post como draft, publicarlo, cambiarle el dueño, verificar el dueño y limpiarla
    Given I navigate to page "http://localhost:2369/ghost/"
    Then I login with credentials
    Then I navigate to menu "posts/"
    Then I create new "post/"
    Then I enter "Post owner change" into input field having css selector "[placeholder='Post Title']"
    Then I "Publish" current "Post"
    Then I change post owner from current to "Ghost"
    Then I "Update" current "Post"
    Then I delete current draft