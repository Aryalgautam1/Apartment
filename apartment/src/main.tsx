// Entry point for the Rgaon Apartment website
// This is where React takes over and renders our app
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Mount the React app to the DOM
// Using the modern createRoot API for better performance
createRoot(document.getElementById("root")!).render(<App />);
