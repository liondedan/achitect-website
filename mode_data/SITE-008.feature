# Feature file for work item: SITE-008

Feature: Engaging About Page Layout
  As a website visitor
  I want to see a more engaging layout on the 'About Me' page
  So that the content is more visually appealing and easier to read

  Scenario: View an engaging 'About Me' page layout
    Given I am on the 'About Me' page
    When the page loads
    Then the layout should not be a simple vertical stack of text and images
    And images should be positioned alongside relevant text content