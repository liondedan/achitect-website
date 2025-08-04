# Feature file for work item: SITE-009

Feature: Site Footer
  As a potential client
  I want to see a subtle footer on each page
  So that I can easily find contact information and see the site is professionally finished.

  Scenario: Visitor sees the site footer
    Given I am on any page of the website
    When I scroll to the bottom
    Then I should see a footer section
    And the footer contains underlined text encouraging users to get in touch
    And the footer contains an inspirational line of text
    And the footer contains the copyright date information