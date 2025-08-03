# Changelog: SITE-006 - Visitor sends an inquiry

## [TASK-006A] Install Dependencies

- **Author:** TDD Engineer
- **Change Summary:** Installed `react-hook-form` and `nodemailer` as dependencies, and `@types/nodemailer` as a dev dependency.
- **Files Changed:**
  - `achitect-website/package.json`
  - `achitect-website/package-lock.json`
- **Impact:** The required libraries for building the contact form and handling email submission are now available in the project.

## [TASK-006B] Create 'Contact' Page

- **Author:** TDD Engineer
- **Change Summary:** Created the basic 'Contact' page at `achitect-website/src/pages/contact.tsx` and added a heading. Implemented a passing test to verify the page's creation.
- **Files Changed:**
  - `achitect-website/src/pages/contact.tsx`
  - `achitect-website/src/pages/contact.test.tsx`
- **Impact:** The 'Contact' page now exists and is ready for the contact form to be added. It is covered by a basic test, ensuring its foundational stability.

## [TASK-006C] Develop 'ContactForm' Component

- **Author:** TDD Engineer
- **Change Summary:** Developed the `ContactForm` component with fields for name, email, and message, using `react-hook-form` for form handling.
- **Files Changed:**
  - `achitect-website/src/components/ContactForm.tsx`
  - `achitect-website/src/components/ContactForm.test.tsx`
  - `achitect-website/src/components/ContactForm.module.css`
- **Impact:** The reusable `ContactForm` component is now available, providing the user interface for submitting inquiries.

## [TASK-006D] Create API Route for Form Submission

- **Author:** TDD Engineer
- **Change Summary:** Created the API route at `achitect-website/src/pages/api/contact.ts` to handle form submissions.
- **Files Changed:**
  - `achitect-website/src/pages/api/contact.ts`
  - `achitect-website/src/pages/api/contact.test.ts`
- **Impact:** The backend endpoint for the contact form is now in place, ready to receive and process form data.

## [TASK-006E] Implement Email Sending Logic

- **Author:** TDD Engineer
- **Change Summary:** Implemented the email sending functionality in the `/api/contact` route using `nodemailer`.
- **Files Changed:**
  - `achitect-website/src/pages/api/contact.ts`
  - `achitect-website/src/pages/api/contact.test.ts`
- **Impact:** The API route can now send emails, completing the core backend functionality for the contact form.

## [TASK-006F] Connect Frontend Form to API

- **Author:** TDD Engineer
- **Change Summary:** Connected the `ContactForm` component to the `/api/contact` endpoint, enabling form submissions to be sent to the backend.
- **Files Changed:**
  - `achitect-website/src/components/ContactForm.tsx`
  - `achitect-website/src/components/ContactForm.test.tsx`
- **Impact:** The contact form is now fully functional, allowing users to send inquiries that are processed by the backend.

## [TASK-006G] Add Navigation Link

- **Author:** TDD Engineer
- **Change Summary:** Verified that the navigation link to the 'Contact' page already exists in the `Header` component and that the corresponding test is passing.
- **Files Changed:**
  - `achitect-website/src/components/Header.tsx`
  - `achitect-website/src/components/Header.test.tsx`
- **Impact:** The 'Contact' page is now accessible from the main navigation, improving site usability. No code changes were necessary as the implementation was already in place.

## [TASK-006H] Integrate 'ContactForm' into 'Contact' Page

- **Author:** TDD Engineer
- **Change Summary:** Integrated the `ContactForm` component into the `contact.tsx` page.
- **Files Changed:**
  - `achitect-website/src/pages/contact.tsx`
  - `achitect-website/src/pages/contact.test.tsx`
- **Impact:** The contact form is now visible and usable on the 'Contact' page.