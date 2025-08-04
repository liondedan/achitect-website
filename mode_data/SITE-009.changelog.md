# Changelog: SITE-009 - Site Footer

## Changes Summary

- **Created `Footer` Component**: A new reusable `Footer` component was created and integrated into the main application layout to ensure it appears on all pages.
- **Added Content**: The footer includes an inspirational message and a dynamic copyright notice on a single line.
- **Styling**: The footer is styled to be slim, subtle, and center-aligned.
- **Testing**: A new test file was created to verify that the `Footer` component renders correctly and includes all the required content.
- **Fix**: Removed a duplicate `Header` component from the homepage to resolve a layout issue.
- **Refactor**: Updated the `Footer` component to remove the "Get in touch" link, combine the remaining text into a single line, and update the copyright text to "WD, Wales Design".

## Files Changed

- `src/components/Footer.tsx` (modified)
- `src/components/Footer.test.tsx` (modified)
- `src/components/Footer.module.css` (modified)
- `src/pages/_app.tsx` (modified)
- `src/pages/index.tsx` (modified)