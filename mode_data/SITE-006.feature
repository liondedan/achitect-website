# Feature file for work item: SITE-006

Feature: Contact Form
  As a prospective client
  I want a simple contact form
  So that I can easily send a message to the architect

  Scenario: Visitor successfully sends an inquiry
    Given I am on the contact page
    When I fill in my name, email, and message and submit the form
    Then I should see a confirmation message
    And the architect should receive an email with my inquiry