# Technical Plan: SITE-008 - Engaging About Page Layout

## 1. Objective

To refactor the 'About Me' page to create a more visually engaging, multi-column layout using CSS Grid, positioning images alongside relevant text content as per the requirements in `SITE-008.feature`.

## 2. Technical Approach

We will use CSS Grid to structure the content within the `AboutMeContent` component. This will involve modifying the component's JSX to interleave text and image elements and updating the corresponding CSS module to apply the grid layout. We may also need to adjust the data structure in `src/data/about.ts` to better support a mixed content flow.

## 3. Engineering Tasks

### Task 1: Refactor `AboutMeContent` Component
- **Status:** DONE
- **File:** `achitect-website/src/components/AboutMeContent.tsx`
- **Action:** Modify the component's render method to map over a unified content array (e.g., `data.contentBlocks`). Each block will be rendered as either a text section or an image. This will replace the current separate rendering of `data.images` and text content.

### Task 2: Update CSS for Grid Layout
- **Status:** DONE
- **File:** `achitect-website/src/components/AboutMeContent.module.css`
- **Action:** Apply `display: grid` to the main container. Define `grid-template-columns` to create a responsive multi-column layout. Use `grid-column` and `grid-row` properties to position individual text and image blocks within the grid, creating an engaging, non-linear flow.

### Task 3: Adjust Data Structure and Content
- **Status:** DONE
- **File:** `achitect-website/src/types/about.ts`
- **Action:** Update the `AboutMe` type definition. Replace `biography` and `designPhilosophy` with a `contentBlocks` array. Each object in the array should have a `type` ('text' or 'image') and the corresponding data (`content` for text, `url` and `altText` for images).
- **File:** `achitect-website/src/data/about.ts`
- **Action:** Update the `aboutMeData` object to conform to the new `AboutMe` type. Split the existing biography and design philosophy into smaller paragraphs and intersperse them with the images in the `contentBlocks` array.

### Task 4: Update Component Test
- **File:** `achitect-website/src/components/AboutMeContent.test.tsx`
- **Action:** Update the test to reflect the new data structure and DOM output. Ensure the test verifies that both text and images are rendered correctly within the new grid structure.

## 4. Risks and Considerations

- **Responsiveness:** The CSS Grid implementation must be thoroughly tested across various screen sizes to ensure the layout adapts correctly and remains readable on mobile devices.
- **Data Structure Changes:** Modifying the data structure is a significant change. We must ensure that the component correctly handles the new `contentBlocks` array and that the data in `about.ts` is structured logically.

## 5. Non-Functional Requirements

- **Performance:** Images should continue to be optimized using `next/image` with appropriate `width`, `height`, and `placeholder` props to maintain good page load performance.
- **Accessibility:** Ensure the semantic order of the content in the HTML makes sense even if the visual order is changed by the grid layout. Use appropriate ARIA attributes if necessary.