Feature: realizar publish de un post y eliminarlo

  @user1 @web
  Scenario: e6, Como usuario quiero crear un post, publicarlo, verificar su existencia y luego eliminarlo.
    Given I navigate to page with the url stored in the variable
    And I login with credentials
    And I navigate to menu "posts/"
    And I click on element having css selector "a[href='#/editor/post/']"
    And I enter "Post programado Prueba" into input field having css selector ".gh-editor-title"
    And I wait for 1 seconds
    And I enter "texto de prueba del post" into input field having css selector "p[data-koenig-dnd-droppable='true']"
    And I click on element having css selector ".gh-publishmenu"
    And I wait for 1 seconds
    And I click on element having css selector ".gh-date-time-picker-time"
    And I click on element having css selector ".gh-publishmenu-button"
    And I navigate to page with the url stored in the variable
    And I navigate to menu "posts/"
    Then I verify the existance of post scheduled with title "Post programado Prueba"
    And I delete the new post with title: "Post programado Prueba"
    And I navigate to page with the url stored in the variable
    Then I navigate to menu "posts/"