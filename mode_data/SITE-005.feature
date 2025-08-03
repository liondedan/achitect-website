# Feature file for work item: SITE-005

Feature: Process and Services Page
  As a prospective client
  I want to clearly understand the architect's process and what services they offer
  So that I know how they can help me

  Scenario: Visitor views the process and services
    Given I am on the 'Process & Services' page
    When the page loads
    Then I should see a description of the work process
    And I should see a list of offered services