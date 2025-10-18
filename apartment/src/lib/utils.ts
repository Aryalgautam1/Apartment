// Utility functions for the Rgaon Apartment website
// This file contains helper functions used throughout the application

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge Tailwind CSS classes
// Combines clsx for conditional classes and tailwind-merge for deduplication
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
