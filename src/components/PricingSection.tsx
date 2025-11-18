import { Check, Star, Sparkles, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PricingSection = () => {
  const plans = [
    {
      name: "Essential",
      icon: Star,
      description: "Perfect for students starting their study abroad journey",
      price: "$499",
      period: "one-time",
      popular: false,
      features: [
        "University selection guidance (up to 5 universities)",
        "Application document review",
        "Personal statement assistance",
        "Basic visa guidance",
        "Email support",
        "Application timeline planning",
        "Scholarship search assistance",
        "Pre-departure checklist"
      ],
      cta: "Get Started",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Professional",
      icon: Sparkles,
      description: "Most popular choice for serious applicants",
      price: "$1,299",
      period: "one-time",
      popular: true,
      features: [
        "Everything in Essential, plus:",
        "University selection guidance (up to 10 universities)",
        "Complete application management",
        "Professional SOP/Essay editing",
        "Full visa application support",
        "Mock interview preparation",
        "Scholarship application assistance",
        "Post-arrival support (3 months)",
        "Priority email & chat support",
        "Career counseling session"
      ],
      cta: "Most Popular",
      color: "from-accent to-yellow-500"
    },
    {
      name: "Premium",
      icon: Crown,
      description: "VIP service with guaranteed admission support",
      price: "$2,999",
      period: "one-time",
      popular: false,
      features: [
        "Everything in Professional, plus:",
        "Unlimited university applications",
        "Dedicated personal counselor",
        "Premium essay writing service",
        "Guaranteed visa assistance",
        "Airport pickup coordination",
        "Accommodation assistance",
        "Post-arrival support (12 months)",
        "24/7 priority support",
        "Exclusive scholarship opportunities",
        "Family visa guidance",
        "Bank loan assistance"
      ],
      cta: "Go Premium",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="pricing" className="min-h-screen relative flex items-center justify-center py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at 20% 50%, hsl(222 66% 55% / 0.3) 0%, transparent 50%),
                       radial-gradient(circle at 80% 50%, hsl(270 66% 65% / 0.3) 0%, transparent 50%)`
        }}
      ></div>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Transparent Pricing</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Choose Your Path to Success
          </h2>

          <p className="text-xl lg:text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed">
            Flexible packages designed to fit your budget and goals. All plans include our 98% visa success guarantee.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card
                key={plan.name}
                className={`relative glass-card glow-hover interactive ${
                  plan.popular ? 'border-2 border-accent shadow-2xl scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground px-4 py-1 text-sm font-bold">
                      MOST POPULAR
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <div className={`mx-auto mb-4 p-3 rounded-2xl bg-gradient-to-br ${plan.color} w-fit`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{plan.period}</p>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.popular ? 'text-accent' : 'text-primary'
                        }`} />
                        <span className={`text-sm leading-relaxed ${
                          feature.includes('Everything in') ? 'font-semibold text-foreground' : 'text-foreground/90'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-6">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-accent hover:bg-accent/90 text-accent-foreground'
                        : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    } glow-hover interactive`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            💡 All plans include our <span className="text-accent font-semibold">98% visa success rate</span> guarantee
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Not sure which plan is right for you? <a href="#contact" className="text-accent hover:underline">Contact us for a free consultation</a>
          </p>
        </div>

        {/* Money Back Guarantee Badge */}
        <div className="mt-12 flex justify-center">
          <div className="glass-card px-6 py-4 inline-flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
              <Check className="w-6 h-6 text-green-500" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">30-Day Money Back Guarantee</p>
              <p className="text-sm text-muted-foreground">If you're not satisfied, we'll refund your payment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
