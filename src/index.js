import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

/**
 * The entry point of the application.
 * 
 * This file initializes the React application by rendering the `App` component
 * into the root DOM element. It uses React's `StrictMode` to highlight potential
 * issues in the application during development.
 */

// Get the root DOM element where the React app will be mounted
const root = createRoot(document.getElementById("root"));

// Render the application
root.render(
  /**
   * Wraps the application in React's StrictMode to enable additional checks
   * and warnings during development.
   */
  <StrictMode>
    <App />
  </StrictMode>
);
