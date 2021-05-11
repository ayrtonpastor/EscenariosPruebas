Feature: realizar publish de un post y eliminarlo

  @user1 @web
  Scenario: Como usuario quiero crear un post, publicarlo, verificar su existencia y luego eliminarlo.
    Given I navigate to page "http://localhost:2369/ghost/"
    And I enter "administrador123@example.com" into input field having css selector "[name='identification']"
    And I enter "administrador123" into input field having css selector "[name='password']"
    And I click on element having css selector ".login"
    And I navigate to menu "pages/"
    And I click on element having css selector "a[href='#/editor/page/']"
    And I enter "Pagina programado Prueba" into input field having css selector ".gh-editor-title"
    And I wait for 1 seconds
    And I enter "texto de prueba de la pagina" into input field having css selector "p[data-koenig-dnd-droppable='true']"
    And I click on element having css selector ".gh-publishmenu"
    And I wait for 1 seconds
    And I click on element having css selector ".gh-date-time-picker-time"
    And I click on element having css selector ".gh-publishmenu-button"
    And I navigate to page "http://localhost:2369/ghost/"
    And I navigate to menu "pages/"
    Then I verify the existance of post scheduled with title "Pagina programado Prueba"
    And I delete the new post with title: "Pagina programado Prueba"
    And I navigate to page "http://localhost:2369/ghost/"
    Then I navigate to menu "pages/"