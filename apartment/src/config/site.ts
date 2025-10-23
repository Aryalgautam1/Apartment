// Site configuration - centralized config for easy management
export const siteConfig = {
  name: "Rgaon Apartment",
  description: "Experience modern luxury living at Rgaon Apartment. Contemporary designs, premium amenities, and exceptional service.",
  url: import.meta.env.VITE_SITE_URL || "http://localhost:5173",
  
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || "leasing@rgaonapt.com",
    phone: import.meta.env.VITE_CONTACT_PHONE || "(555) 123-4567",
    address: import.meta.env.VITE_CONTACT_ADDRESS || "123 Main Street, City, State 12345",
    hours: {
      weekday: "Mon-Fri: 9am-6pm",
      weekend: "Sat-Sun: 10am-4pm"
    }
  },

  social: {
    facebook: "https://facebook.com/rgaonapartment",
    instagram: "https://instagram.com/rgaonapartment",
    twitter: "https://twitter.com/rgaonapartment"
  },

  // EmailJS configuration
  emailJS: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
    templateIds: {
      contact: import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT || "",
      schedule: import.meta.env.VITE_EMAILJS_TEMPLATE_ID_SCHEDULE || ""
    },
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ""
  },

  // Google Analytics
  analytics: {
    measurementId: import.meta.env.VITE_GA_MEASUREMENT_ID || ""
  }
};

