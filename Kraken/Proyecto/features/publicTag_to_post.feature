Feature: Shared board connection

  @user1 @web
  Scenario: Assign a public tag to a post
    Given I navigate to page "http://localhost:2368/ghost"
    When I login with credentials
    And I click on element having css selector "[href='#/tags/']"
    And I click on element having css selector "[href='#/tags/new/']"
    And I config a "public" tag with the name "TestTag" and a valid description
    And I click on "Save" button
    And I click on element having css selector "[href='#/posts/']"
    And I click on element having css selector "[href='#/editor/post/']"
    And I enter "Publicación para etiquetar" into input field having css selector "[placeholder='Post Title']"
    And I press the key "Tab"
    And I type this "Descripción de publicación para etiquetar"
    And I tag the "post" with the recently created "private" tag, named "TestTag"
    And I save as published "post"
    And I click on element having css selector "[href='#/posts/']"
    And I filter by tags and I click on the tag "TestTag", the recently created "public" tag
    Then I go to edit the post "Publicación para etiquetar" on element having css selector "[href='#/posts/']"
    Then I delete the current "post"
    And I click on element having css selector "[href='#/tags/']"
    Then I go to edit the "public" tag with the name "TestTag"
    Then I delete the current tag
