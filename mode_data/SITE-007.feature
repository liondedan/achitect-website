# Feature file for work item: SITE-007

Feature: Mobile Responsive Viewing
  As a prospective client using a mobile phone
  I want the website to adapt to my screen size
  So that I can easily read content and navigate the site without excessive zooming or scrolling

  Scenario: Website adapts to a mobile viewport
    Given I am using a device with a screen width of less than 768 pixels
    When I visit any page on the website
    Then the page content should be displayed in a single-column layout
    And the main navigation should be collapsed into a hamburger menu
    And all text should be legible without needing to zoom
    And all images should scale to fit within the screen width