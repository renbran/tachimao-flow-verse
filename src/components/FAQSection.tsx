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
      question: "What services does Scholarix Global offer?",
      answer: "Scholarix Global provides enterprise data analytics and AI consulting services including business intelligence solutions, predictive analytics and forecasting, AI-driven automation, custom AI model development, data strategy consulting, and comprehensive digital transformation services. We help enterprises unlock the full potential of their data to drive strategic decisions and measurable ROI."
    },
    {
      question: "How long does implementation typically take?",
      answer: "Implementation timelines vary based on project scope and complexity. Simple analytics dashboards can be deployed in 2-3 weeks, while comprehensive AI solutions may take 8-12 weeks. We provide a detailed project timeline during our initial consultation and follow agile methodologies to deliver value incrementally throughout the engagement."
    },
    {
      question: "Do you offer custom solutions or only pre-built packages?",
      answer: "We specialize in custom, enterprise-grade solutions tailored to your specific business challenges and data landscape. While we leverage proven frameworks and methodologies, every implementation is customized to align with your unique workflows, existing infrastructure, and strategic objectives. Our consultative approach ensures solutions that deliver real business value."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide 24/7 expert support to all enterprise clients. This includes dedicated data scientists and AI specialists, comprehensive documentation, knowledge transfer sessions, regular model performance reviews, proactive optimization, and strategic consulting. We're committed to your long-term success and continuous improvement of your analytics capabilities."
    },
    {
      question: "Is my data secure with Scholarix Global?",
      answer: "Absolutely. Security and compliance are paramount. We implement bank-level encryption, secure cloud infrastructure, strict access controls, regular security audits, and comply with international standards including GDPR, SOC 2, and UAE data protection regulations. Your data is protected with multiple layers of security and is never shared without explicit authorization."
    },
    {
      question: "Can Scholarix Global integrate with our existing data infrastructure?",
      answer: "Yes! We have extensive experience integrating with diverse enterprise systems including cloud platforms (AWS, Azure, GCP), data warehouses (Snowflake, Redshift, BigQuery), business intelligence tools (Tableau, Power BI), CRMs (Salesforce, Dynamics), ERPs (SAP, Oracle), and custom APIs. Our solutions are designed to work seamlessly within your existing technology ecosystem."
    },
    {
      question: "What are your pricing models?",
      answer: "We offer flexible engagement models tailored to enterprise needs, including project-based consulting, monthly retainers, annual partnerships, and outcome-based pricing tied to measurable KPIs. Pricing depends on project scope, required expertise, implementation complexity, and ongoing support needs. Contact us for a customized proposal aligned with your budget and objectives."
    },
    {
      question: "Do you provide training and knowledge transfer?",
      answer: "Yes! Knowledge transfer is integral to our methodology. We provide comprehensive training including hands-on workshops, documentation, best practices guides, and ongoing mentorship. Our goal is to empower your team with the skills and confidence to leverage analytics and AI effectively, ensuring sustainable value long after implementation."
    },
    {
      question: "What if our needs evolve after implementation?",
      answer: "We build for evolution! All our solutions are designed with scalability and adaptability in mind. We offer ongoing optimization services, regular model retraining, feature enhancements, and strategic consulting to ensure your analytics capabilities grow with your business. Your dedicated account team proactively identifies opportunities for continuous improvement."
    },
    {
      question: "How do I get started with Scholarix Global?",
      answer: "Getting started is simple! Contact us via email, phone, or our booking system to schedule a complimentary 30-minute discovery call. We'll discuss your data challenges, explore potential solutions, assess feasibility, and provide initial recommendations. Following this, we'll develop a detailed proposal with clear deliverables, timelines, and ROI projections. No obligation required."
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
