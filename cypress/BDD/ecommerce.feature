Feature: End to End ecommerce validation

    application regression

    @Regression
    Scenario: Ecommerce product delivery
    Given I open ecommerce page
    When I add items to the cart
    And validate the total prices
    Then select the country, submit and verify thank you

    @Smoke
    Scenario: Filling the form to shop
    Given I open the ecommerce page
    When I fill the form details
    |name |gender |
    |nag |Male |
    Then validate the form details
    And select the shop page