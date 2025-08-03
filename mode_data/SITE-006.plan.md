# Engineering Plan: SITE-006 - Visitor sends an inquiry

## 1. Technical Approach

We will create a new page at `/contact` containing a form for user inquiries. The form will be managed using the `react-hook-form` library for efficient state management and validation. Upon submission, the form data will be sent to a new Next.js API route at `/api/contact`. This backend endpoint will use `Nodemailer` to send the inquiry as an email to the architect. We will need to configure SMTP settings via environment variables for security.

## 2. Engineering Tasks

- **TASK-006A: Install Dependencies**
  - Install `react-hook-form` for the frontend form management.
  - Install `nodemailer` for the backend email functionality.
  - Add `@types/nodemailer` for TypeScript support.

- **TASK-006B: Create 'Contact' Page**
  - Create the page file at `achitect-website/src/pages/contact.tsx`.
  - Add a basic page structure with a main heading and introductory text.
  - Create a corresponding test file `achitect-website/src/pages/contact.test.tsx` to verify the page renders.

- **TASK-006C: Develop 'ContactForm' Component**
  - Create a `ContactForm` component with fields for name, email, and message.
  - Implement form handling and validation using `react-hook-form`.
  - Add a submit button and display validation errors.
  - Create corresponding tests for the form component.

- **TASK-006D: Create API Route for Form Submission**
  - Create the API route file at `achitect-website/src/pages/api/contact.ts`.
  - The endpoint will accept `POST` requests with the form data.
  - Implement basic validation to ensure all required fields are present.

- **TASK-006E: Implement Email Sending Logic**
  - In the `/api/contact` route, configure a `Nodemailer` transporter using environment variables for SMTP credentials (e.g., `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`).
  - Construct the email content using the submitted form data.
  - Implement the logic to send the email and handle success or error responses.

- **TASK-006F: Connect Frontend Form to API**
  - In the `ContactForm` component, implement the `onSubmit` handler.
  - The handler will make a `POST` request to the `/api/contact` endpoint with the form data.
  - Implement logic to display a success message to the user upon successful submission, or an error message if the submission fails.

- **TASK-006G: Add Navigation Link**
  - Update the `Header` component in `achitect-website/src/components/Header.tsx` to include a navigation link to the new `/contact` page.

- **TASK-006H: Integrate 'ContactForm' into 'Contact' Page**
  - Import and render the `ContactForm` component within the `contact.tsx` page.
  - Update the page test to assert that the form is present.

## 3. Technical Notes

- **Security:** SMTP credentials and the recipient email address must be stored in environment variables (`.env.local`) and not be exposed to the client-side.
- **User Experience:** The form should provide clear feedback to the user, including validation errors, loading states during submission, and a clear success or failure message.
- **Error Handling:** The API route should include robust error handling to manage issues with email sending and provide meaningful feedback to the frontend.