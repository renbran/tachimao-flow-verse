import { Target, Zap, Users, Award, TrendingUp, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We leverage cutting-edge technology to solve complex business challenges.",
    },
    {
      icon: Zap,
      title: "Speed & Efficiency",
      description: "Rapid implementation and deployment to get your systems running fast.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our mission. We build solutions tailored to your needs.",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Enterprise-grade security and compliance built into every solution.",
    },
  ];

  const stats = [
    { number: "100+", label: "Successful Implementations" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <section id="about" className="min-h-screen relative flex items-center justify-center py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background opacity-90"></div>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at 30% 20%, hsl(213 100% 50% / 0.3) 0%, transparent 50%),
                       radial-gradient(circle at 70% 80%, hsl(263 85% 65% / 0.3) 0%, transparent 50%)`
        }}
      ></div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-primary/10 blur-2xl float-animation"></div>
      <div className="absolute bottom-1/3 left-1/3 w-24 h-24 rounded-full bg-secondary/10 blur-2xl float-animation" style={{animationDelay: '1.5s'}}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">About Tachimao</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Pioneering Business Automation
          </h2>

          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Since 2022, we've been transforming how businesses operate with intelligent
            automation and cutting-edge AI solutions.
          </p>
        </div>

        {/* Story */}
        <div className="glass-card p-8 lg:p-12 mb-16 glow-hover">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold">Our Story</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2022, Tachimao emerged from a simple observation: businesses
                were drowning in repetitive tasks and disconnected systems. We knew there
                had to be a better way.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we're proud to serve 50+ enterprise clients worldwide, delivering
                AI-powered solutions that eliminate headaches and unlock growth potential.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower businesses with intelligent automation that simplifies
                operations, enhances productivity, and drives sustainable growth.
              </p>
              <div className="flex items-center gap-3 p-4 glass-card">
                <TrendingUp className="w-8 h-8 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground font-semibold">One System. Zero Headaches.</span>
                  <br />Our promise to every client.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="glass-card p-6 glow-hover interactive group cursor-default"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="glass-card p-8 lg:p-12">
          <h3 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Results That Speak for Themselves
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
