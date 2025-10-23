// Structured Data - JSON-LD for better SEO
import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/config/site";

interface StructuredDataProps {
  type?: "Organization" | "ApartmentComplex" | "ContactPage" | "FAQPage";
}

const StructuredData = ({ type = "Organization" }: StructuredDataProps) => {
  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address,
    },
    "sameAs": [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.twitter,
    ]
  };

  // Apartment Complex schema
  const apartmentSchema = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address,
    },
    "telephone": siteConfig.contact.phone,
    "url": siteConfig.url,
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "High-Speed Internet",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Fitness Center",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Covered Parking",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "24/7 Security",
        "value": true
      }
    ]
  };

  // Contact page schema
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us - " + siteConfig.name,
    "url": siteConfig.url + "/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": siteConfig.name,
      "telephone": siteConfig.contact.phone,
      "email": siteConfig.contact.email,
    }
  };

  // FAQ page schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the application process?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our application process is simple and straightforward. Schedule a tour, submit an online application with required documents, and we'll review within 24-48 hours."
        }
      },
      {
        "@type": "Question",
        "name": "Are pets allowed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We are a pet-friendly community. We welcome both cats and dogs with a pet deposit of $300 per pet and monthly pet rent of $25."
        }
      }
    ]
  };

  let schema;
  switch (type) {
    case "ApartmentComplex":
      schema = apartmentSchema;
      break;
    case "ContactPage":
      schema = contactSchema;
      break;
    case "FAQPage":
      schema = faqSchema;
      break;
    default:
      schema = organizationSchema;
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;

