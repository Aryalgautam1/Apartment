// Footer component with contact info and quick links
// Provides essential information and navigation for users
import { Building2, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section - Logo and tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Rgaon Apartment
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Experience modern living in our luxury apartments. Your perfect home awaits.
            </p>
          </div>

          {/* Quick Links - Easy navigation to main pages */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link
                to="/floor-plans"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Floor Plans
              </Link>
              <Link
                to="/contact"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/schedule"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Schedule Tour
              </Link>
            </nav>
          </div>

          {/* Contact Information - All the ways to reach us */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" />
                <span>123 Main Street, City, State 12345</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-accent" />
                <span>leasing@rgaonapt.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright notice - automatically updates year */}
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Rgaon Apartment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
