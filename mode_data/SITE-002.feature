# Feature file for work item: SITE-002

Feature: Project Portfolio Showcase
  As a prospective client
  I want to browse a gallery of project examples
  So that I can evaluate the architect's work and style.

  Scenario: Visitor views the project portfolio
    Given I am on the portfolio page
    When the page loads
    Then I should see a curated selection of project thumbnails
    And each thumbnail should display the project title
    And a brief description of the project

  Scenario: Visitor views an empty project portfolio
    Given I am on the portfolio page
    And there are no projects to display
    When the page loads
    Then I should see a message indicating that projects will be added soon