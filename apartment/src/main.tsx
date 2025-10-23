// Entry point for the Rgaon Apartment website
// This is where React takes over and renders our app
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

// Mount the React app to the DOM
// Using the modern createRoot API for better performance
// HelmetProvider allows us to manage document head (meta tags, structured data)
createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
