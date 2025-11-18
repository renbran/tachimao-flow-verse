import { HelpCircle, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What services does Tachimao offer?",
      answer: "Tachimao provides comprehensive business automation solutions including CRM with AI-powered lead scoring, automated invoicing systems, sales offer generation, AI agents for client interaction, and property & inventory automation. We help businesses streamline their operations and eliminate manual processes."
    },
    {
      question: "How long does implementation typically take?",
      answer: "Implementation timelines vary based on the complexity of your needs. Simple solutions like automated invoicing can be deployed in 1-2 weeks, while comprehensive systems may take 4-8 weeks. We provide a detailed timeline during our initial consultation and work efficiently to get you up and running quickly."
    },
    {
      question: "Do you offer custom solutions or only pre-built packages?",
      answer: "We offer both! While we have proven solutions that work for most businesses, we specialize in customizing our services to fit your specific workflows and requirements. Every business is unique, and our team works closely with you to tailor solutions that address your particular challenges."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide 24/7 technical support to all our clients. This includes a dedicated support team, comprehensive documentation, video tutorials, regular system health checks, and ongoing optimization. We're committed to your success and are always available when you need us."
    },
    {
      question: "Is my data secure with Tachimao?",
      answer: "Absolutely. Security is our top priority. We use enterprise-grade encryption, secure cloud infrastructure, regular security audits, and comply with industry standards including GDPR and SOC 2. Your data is protected with multiple layers of security and is never shared with third parties without your explicit consent."
    },
    {
      question: "Can Tachimao integrate with my existing tools?",
      answer: "Yes! Our solutions are designed to integrate seamlessly with popular business tools including CRMs (Salesforce, HubSpot), accounting software (QuickBooks, Xero), communication platforms (Slack, Microsoft Teams), and many others. We also offer custom API integrations for specialized tools."
    },
    {
      question: "What are your pricing models?",
      answer: "We offer flexible pricing based on your needs, including monthly subscriptions, annual contracts, and custom enterprise agreements. Pricing depends on the solutions you choose, the number of users, and the level of customization required. Contact us for a personalized quote tailored to your business."
    },
    {
      question: "Do you provide training for my team?",
      answer: "Yes! We provide comprehensive training as part of our onboarding process. This includes live training sessions, recorded tutorials, documentation, and ongoing support. We ensure your team is fully equipped to leverage our solutions effectively from day one."
    },
    {
      question: "What if I need changes after implementation?",
      answer: "We're here for the long term! Our services include ongoing support and optimization. If you need changes, updates, or new features, simply reach out to your dedicated account manager. We regularly update our systems and can accommodate evolving business needs."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Simply click the 'Get Started' button, fill out our contact form, or call us directly. We'll schedule a free consultation to understand your needs, provide a custom proposal, and outline the next steps. No commitment required for the initial consultation."
    }
  ];

  return (
    <section className="min-h-screen relative flex items-center justify-center py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background opacity-90"></div>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at 70% 30%, hsl(213 100% 50% / 0.3) 0%, transparent 50%),
                       radial-gradient(circle at 30% 70%, hsl(263 85% 65% / 0.3) 0%, transparent 50%)`
        }}
      ></div>

      {/* Floating Elements */}
      <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-primary/10 blur-2xl float-animation"></div>
      <div className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full bg-secondary/10 blur-2xl float-animation" style={{animationDelay: '1.5s'}}></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Frequently Asked Questions</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Got Questions? We've Got Answers
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our services, implementation, and support
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="glass-card p-6 sm:p-8 lg:p-12">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-4 sm:px-6 border-none"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-5">
                  <div className="flex items-start gap-3 sm:gap-4 pr-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs sm:text-sm font-bold text-primary">{index + 1}</span>
                    </div>
                    <span className="text-base sm:text-lg font-semibold leading-tight">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 sm:pb-5">
                  <div className="pl-9 sm:pl-12 pr-4">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still Have Questions CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a href="#contact" className="text-primary hover:text-accent font-semibold text-lg underline">
            Contact us for a free consultation →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
