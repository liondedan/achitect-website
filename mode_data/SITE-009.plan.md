# Engineering Plan: SITE-009 - Site Footer

## 1. Technical Approach

The plan is to create a new, reusable `Footer` component that will be displayed on every page of the website. This will be achieved by creating the component and its styles, and then integrating it into the main application layout file (`_app.tsx`).

## 2. Engineering Tasks

-   **Task 1: Create Footer Component File** - DONE
-   **Task 2: Implement Footer Structure and Content** - DONE
-   **Task 3: Style the Footer** - DONE
-   **Task 4: Write Component Test** - DONE
-   **Task 5: Integrate Footer into Application** - DONE

## 3. Technical Notes & Risks

-   **Note:** The "Get in touch" link should navigate to the existing contact page.
-   **Note:** The copyright year should be generated dynamically using `new Date().getFullYear()` to ensure it's always current.
-   **Risk:** The footer's styling must be carefully managed to ensure it does not overlap with or obscure content on any page, particularly on pages with less content.