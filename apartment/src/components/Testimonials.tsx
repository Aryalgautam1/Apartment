// Testimonials Component - Customer reviews and social proof
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  unit: string;
  rating: number;
  review: string;
  date: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      unit: "Two Bedroom, 3rd Floor",
      rating: 5,
      review: "Living at Rgaon has been an absolute dream! The apartment is spacious, modern, and beautifully maintained. The management team is incredibly responsive, and the amenities are top-notch. I especially love the fitness center and the covered parking. Highly recommend!",
      date: "2 months ago"
    },
    {
      id: 2,
      name: "Michael Chen",
      unit: "One Bedroom, 2nd Floor",
      rating: 5,
      review: "I've been living here for over a year now, and I couldn't be happier. The location is perfect - close to everything I need. The high-speed internet is a game-changer for remote work. The community is quiet and peaceful, and maintenance requests are handled promptly.",
      date: "3 weeks ago"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      unit: "Studio, 1st Floor",
      rating: 5,
      review: "As a first-time renter, I was nervous about the process, but the team at Rgaon made everything so easy! The studio is perfect for my needs - modern, efficient, and surprisingly spacious. The 24/7 security gives me peace of mind. Love it here!",
      date: "1 month ago"
    },
    {
      id: 4,
      name: "David Thompson",
      unit: "Two Bedroom, 5th Floor",
      rating: 5,
      review: "Fantastic place to call home! The views from our apartment are stunning, and the building is always clean and well-maintained. The leasing office staff are friendly and professional. We renewed our lease without hesitation. Best apartment complex in the area!",
      date: "2 weeks ago"
    },
    {
      id: 5,
      name: "Jessica Lee",
      unit: "One Bedroom, 4th Floor",
      rating: 5,
      review: "I absolutely love living at Rgaon Apartment! The modern design, excellent location, and amazing amenities make it worth every penny. The pet-friendly policy is a huge plus - my dog loves it here too! Can't imagine living anywhere else.",
      date: "1 week ago"
    },
    {
      id: 6,
      name: "Robert Martinez",
      unit: "Two Bedroom, 2nd Floor",
      rating: 5,
      review: "Outstanding apartment complex with exceptional management. Everything from the application process to move-in was seamless. The apartments are exactly as advertised - modern, clean, and comfortable. The neighborhood is safe and convenient. Highly satisfied resident!",
      date: "3 months ago"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            What Our Residents Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy residents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                "{testimonial.review}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <Avatar>
                  <AvatarFallback className="bg-accent/10 text-accent font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.unit}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.date}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to join our community?
          </p>
          <a
            href="/schedule"
            className="text-accent hover:text-accent/80 font-medium transition-colors"
          >
            Schedule your tour today →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

