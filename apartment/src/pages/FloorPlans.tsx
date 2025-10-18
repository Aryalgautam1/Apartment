// Floor Plans page - Showcases available apartment units with filtering
// Allows visitors to browse different unit types and see pricing
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Maximize2, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import studioImg from "@/assets/floor-studio.jpg";
import oneBedImg from "@/assets/floor-1bed.jpg";
import twoBedImg from "@/assets/floor-2bed.jpg";

// Type definition for apartment units
interface Unit {
  id: number;
  name: string;
  beds: number;
  baths: number;
  sqft: number;
  rentLow: number;
  rentHigh: number;
  image: string;
  available: boolean;
  description: string;
}

const FloorPlans = () => {
  // State for filtering units by bedroom count
  const [selectedBeds, setSelectedBeds] = useState<number | null>(null);

  // Apartment unit data - easy to add new units or modify existing ones
  const units: Unit[] = [
    {
      id: 1,
      name: "Studio Apartment",
      beds: 0,
      baths: 1,
      sqft: 550,
      rentLow: 1200,
      rentHigh: 1400,
      image: studioImg,
      available: true,
      description: "Perfect for individuals seeking modern, efficient living space with an open floor plan",
    },
    {
      id: 2,
      name: "One Bedroom",
      beds: 1,
      baths: 1,
      sqft: 750,
      rentLow: 1600,
      rentHigh: 1900,
      image: oneBedImg,
      available: true,
      description: "Spacious one-bedroom with separate living area and contemporary kitchen",
    },
    {
      id: 3,
      name: "Two Bedroom",
      beds: 2,
      baths: 2,
      sqft: 1100,
      rentLow: 2200,
      rentHigh: 2600,
      image: twoBedImg,
      available: true,
      description: "Luxurious two-bedroom with premium finishes and stunning city views",
    },
  ];

  // Filter units based on selected bedroom count
  const filteredUnits = selectedBeds === null
    ? units
    : units.filter((unit) => unit.beds === selectedBeds);

  // Available bedroom options for filtering
  const bedOptions = [0, 1, 2];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Floor Plans</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Explore our thoughtfully designed floor plans and find your perfect home
          </p>
        </div>
      </section>

      {/* Filter Controls - Let users narrow down their search */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-sm font-medium text-foreground">Filter by bedrooms:</span>
            <div className="flex gap-2">
              <Button
                variant={selectedBeds === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedBeds(null)}
              >
                All
              </Button>
              {bedOptions.map((beds) => (
                <Button
                  key={beds}
                  variant={selectedBeds === beds ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedBeds(beds)}
                >
                  {beds === 0 ? "Studio" : `${beds} Bed`}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Units Grid - Display filtered apartment units */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredUnits.map((unit) => (
              <Card
                key={unit.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Unit Image with Availability Badge */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={unit.image}
                    alt={unit.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  {unit.available && (
                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                      Available
                    </Badge>
                  )}
                </div>
                
                {/* Unit Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{unit.name}</h3>
                    <p className="text-muted-foreground">{unit.description}</p>
                  </div>

                  {/* Unit Specifications Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Bed className="h-5 w-5 text-accent" />
                      <span className="text-sm">
                        {unit.beds === 0 ? "Studio" : `${unit.beds} Bedroom${unit.beds > 1 ? "s" : ""}`}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Bath className="h-5 w-5 text-accent" />
                      <span className="text-sm">{unit.baths} Bath{unit.baths > 1 ? "s" : ""}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Maximize2 className="h-5 w-5 text-accent" />
                      <span className="text-sm">{unit.sqft.toLocaleString()} sq ft</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <DollarSign className="h-5 w-5 text-accent" />
                      <span className="text-sm">
                        ${unit.rentLow.toLocaleString()} - ${unit.rentHigh.toLocaleString()}/mo
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex gap-3">
                    <Link to="/schedule" className="flex-1">
                      <Button variant="default" className="w-full">
                        Schedule Tour
                      </Button>
                    </Link>
                    <Link to="/contact" className="flex-1">
                      <Button variant="outline" className="w-full">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FloorPlans;
