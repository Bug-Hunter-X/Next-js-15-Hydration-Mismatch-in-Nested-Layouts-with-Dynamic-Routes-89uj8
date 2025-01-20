# Next.js 15 Hydration Mismatch in Nested Layouts with Dynamic Routes
This repository demonstrates a hydration mismatch bug in Next.js 15 when using dynamic routes and nested layouts.  A child component within a nested layout doesn't re-render when data fetched at a parent route level changes.  This is due to the way data is propagated through the component tree and the timing of hydration.

## Bug Reproduction
1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate between different dynamic routes. Observe the inconsistent rendering of the child component.

## Solution
The solution involves ensuring that the child component is re-rendered when the parent route's data changes. This can be achieved by making the child component's rendering dependent on the parent's data through props or a global state management solution, ensuring the necessary re-renders happen at the appropriate times.
