# Week 9: React Advanced - CommunityHub Frontend

## Author
- **Name:** ISABELLA SIMIYU
- **GitHub:** [@bella1234](https://github.com/bella1234)
- **Date:** 09/05/2026

## Project Description
This project covers advanced React concepts including custom hooks, CSS Modules for scoped styling, and building a reusable component library. The main application is a CommunityHub frontend built with React and Vite.

## Technologies Used
- HTML5
- CSS3
- JavaScript
- React
- Vite
- React Router DOM

## Features
- Custom React Hooks
- CSS Module-based component styling
- Reusable Component Library (Avatar, etc.)
- CommunityHub frontend application

## How to Run
1. Clone this repository
2. Run `npm install`
3. Run `npm run dev:communityhub` to start the CommunityHub app

## Lessons Learned
- Learned how to create and use **custom React hooks** to extract and reuse component logic, such as `useForm`, `useFetch`, or `useLocalStorage`, making components cleaner and more maintainable.
- Understood the importance of **CSS Modules** for scoped styling, which prevents class name collisions across components and makes large React codebases easier to manage.
- Gained hands-on experience building a **reusable component library** (e.g., Avatar, Button, Card) with standardized props and styling, improving consistency across the UI.
- Practiced setting up a **React project with Vite**, appreciating its fast hot module replacement (HMR) and minimal configuration compared to Create React App.
- Learned how **React Router DOM** enables client-side navigation in single-page applications (SPAs) without full page reloads.

## Challenges Faced
- **CSS Module class composition:** Initially struggled with applying multiple conditional classes using CSS Modules. Solved it by using template literals and the `styles` object (e.g., ``\`${styles.base} ${styles.large}\``) instead of plain strings.
- **Custom hook dependency arrays:** Ran into infinite loops when fetching data inside a custom hook because the dependency array was not properly configured. Solved by carefully reviewing dependencies and using `useRef` for mutable values that shouldn't trigger re-renders.
- **Reusable component prop design:** Had difficulty deciding which props to expose for the component library to keep it flexible yet simple. Solved by studying existing UI libraries like Material UI and starting with the most common use cases, then expanding based on need.
- **Vite script configuration:** The `npm run dev:communityhub` script initially failed because the path to the project folder was incorrect. Solved by double-checking the `vite` command path in `package.json` scripts against the actual folder structure.


