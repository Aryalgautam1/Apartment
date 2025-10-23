// FAQ Component - Frequently Asked Questions with accordion
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const faqs: FAQItem[] = [
    {
      question: "What is the application process?",
      answer: "Our application process is simple and straightforward. Schedule a tour, submit an online application with required documents (ID, proof of income, references), and we'll review your application within 24-48 hours. Once approved, you can sign the lease and schedule your move-in date."
    },
    {
      question: "What utilities are included in the rent?",
      answer: "Water, sewer, and trash collection are included in your monthly rent. High-speed fiber-optic internet is also complimentary for all residents. Tenants are responsible for electricity and gas utilities, which can be set up in your name upon move-in."
    },
    {
      question: "Are pets allowed?",
      answer: "Yes! We are a pet-friendly community. We welcome both cats and dogs with a pet deposit of $300 per pet and a monthly pet rent of $25. Some breed restrictions may apply. Please contact us for our complete pet policy."
    },
    {
      question: "What is your parking policy?",
      answer: "Each unit comes with one assigned covered parking space at no additional cost. Additional parking spaces are available for $50/month. Guest parking is available on a first-come, first-served basis in designated areas."
    },
    {
      question: "What is the lease term?",
      answer: "We offer flexible lease terms ranging from 6 to 12 months. Month-to-month leases are available after your initial lease term expires. Longer lease terms may qualify for special pricing."
    },
    {
      question: "How much is the security deposit?",
      answer: "The security deposit is equal to one month's rent. This deposit is fully refundable upon move-out, provided the unit is in good condition and all lease terms have been met. We conduct a move-in inspection together to document the unit's condition."
    },
    {
      question: "Is renters insurance required?",
      answer: "Yes, all residents are required to maintain renters insurance with a minimum liability coverage of $100,000. This protects your personal belongings and provides liability coverage. Proof of insurance must be provided before move-in."
    },
    {
      question: "How do I submit a maintenance request?",
      answer: "Maintenance requests can be submitted 24/7 through our resident portal, by phone, or via email. Emergency maintenance is available around the clock. Most non-emergency requests are addressed within 24-48 hours."
    },
    {
      question: "Can I tour the apartments in person?",
      answer: "Absolutely! We encourage in-person tours so you can see our beautiful apartments and amenities firsthand. Schedule a tour using our online booking system, or contact us to arrange a time that works for you. Walk-ins are also welcome during office hours."
    },
    {
      question: "What move-in costs should I expect?",
      answer: "Typical move-in costs include first month's rent, security deposit (one month's rent), and any applicable fees (pet deposit, parking, etc.). We'll provide a detailed breakdown during the application process so there are no surprises."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about living at Rgaon Apartment
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="/contact"
            className="text-accent hover:text-accent/80 font-medium transition-colors"
          >
            Contact us for more information →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

