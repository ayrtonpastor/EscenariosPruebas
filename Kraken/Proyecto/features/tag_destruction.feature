Feature: Shared board connection

  @user1 @web
  Scenario: Delete a tag
    Given I navigate to page "http://localhost:2368/ghost"
    When I login with credentials
    And I click on element having css selector "[href='#/tags/']"
    And I click on element having css selector "[href='#/tags/new/']"
    And I config a "public" tag with the name "Publicidad" and a valid description
    And I click on "Save" button
    And I click on element having css selector "[href='#/tags/']"
    And I go to edit the "public" tag with the name "Publicidad"
    And I delete the current tag
