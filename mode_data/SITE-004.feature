# Feature file for work item: SITE-004
Feature: About Me Page
  As a prospective client,
  I want to read about the architect's background and approach,
  So that I can determine if they are a good fit for my project.

  Scenario: Visitor views the complete 'About Me' page
    Given I am on the 'About Me' page
    When the page loads
    Then I should see a professional photo of the architect
    And I should see a biography section
    And I should see a design philosophy section

  Scenario: 'About Me' page is missing content
    Given I am on the 'About Me' page
    When the page loads with incomplete information
    Then the page should still render without errors
    And it should display placeholders for the missing content