// Home page - The main landing page for the apartment website
// Features a hero section, amenities showcase, and call-to-action sections
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, Bed, Wifi, Car, Shield, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-apartment.jpg";

const Home = () => {
  // Amenities data - easy to modify or add new features
  const features = [
    {
      icon: Bed,
      title: "Modern Living Spaces",
      description: "Thoughtfully designed apartments with contemporary finishes",
    },
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Complimentary fiber-optic internet in all units",
    },
    {
      icon: Car,
      title: "Covered Parking",
      description: "Secure parking available for all residents",
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Professional security team and modern surveillance",
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description: "State-of-the-art gym equipment for residents",
    },
    {
      icon: Building2,
      title: "Prime Location",
      description: "Close to shopping, dining, and entertainment",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Eye-catching banner with call-to-action buttons */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/50" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Welcome to Rgaon Apartment
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Experience luxury living with modern amenities and exceptional service in the heart of the city
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Link to="/floor-plans">
              <Button variant="hero" size="xl">
                View Floor Plans
              </Button>
            </Link>
            <Link to="/schedule">
              <Button variant="secondary" size="xl">
                Schedule a Tour
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - Showcases apartment amenities */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Exceptional Amenities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for comfortable and convenient living
            </p>
          </div>

          {/* Amenities grid - responsive layout that adapts to screen size */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-accent/10">
                    <feature.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section - Final push to convert visitors */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Make Rgaon Your Home?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today to learn more about our available units and schedule a personal tour
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="xl">
                Contact Us
              </Button>
            </Link>
            <Link to="/schedule">
              <Button
                variant="outline"
                size="xl"
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Schedule Tour
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
