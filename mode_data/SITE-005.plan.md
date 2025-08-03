# Engineering Plan: SITE-005 - Visitor understands the architect's process and services

## 1. Technical Approach

We will create a new, dedicated page at `/process` to display the architect's work process and offered services. The content will be driven by static data arrays defined in new TypeScript files, ensuring type safety and easy maintenance. The UI will be constructed from new, reusable React components, styled consistently with the existing website design using CSS Modules.

## 2. Engineering Tasks

- **TASK-005A: Create 'Process & Services' Page**
  - Create the page file at `achitect-website/src/pages/process.tsx`.
  - Add a basic page structure with a main heading.
  - Create a corresponding test file `achitect-website/src/pages/process.test.tsx` to verify the page renders.

- **TASK-005B: Define Data Structures**
  - Create a new file `achitect-website/src/types/process.ts`.
  - Define a `ProcessStep` interface with `title` and `description` fields.
  - Define a `Service` interface with `name` and `description` fields.

- **TASK-005C: Create Mock Data**
  - Create a new file `achitect-website/src/data/process.ts`.
  - Create an array of `ProcessStep` objects with mock content.
  - Create an array of `Service` objects with mock content.

- **TASK-005D: Develop 'Process' Components**
  - Create a `ProcessTimeline` component to iterate over and display the process steps.
  - Create a `ProcessStepCard` component to display an individual process step's title and description.
  - Add corresponding tests and basic styling.

- **TASK-005E: Develop 'Services' Components**
  - Create a `ServiceList` component to iterate over and display the services.
  - Create a `ServiceListItem` component to display an individual service's name and description.
  - Add corresponding tests and basic styling.

- **TASK-005F: Integrate Components and Data**
  - Import the `ProcessTimeline` and `ServiceList` components into the `process.tsx` page.
  - Import the mock data and pass it as props to the components.
  - Ensure the page displays the content correctly.

- **TASK-005G: Add Navigation Link**
  - Update the `Header` component in `achitect-website/src/components/Header.tsx` to include a navigation link to the new `/process` page.

## 3. Technical Notes

- **Styling:** All new components must use CSS Modules and adhere to the established visual style of the website for consistency.
- **Data Source:** The process and service data will be static for this story. Future work could involve fetching this from a headless CMS.
- **Clarity:** The primary goal is to present the information in a clear, easy-to-understand format for prospective clients.