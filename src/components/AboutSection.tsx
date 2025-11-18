import { Target, Zap, Users, Award, TrendingUp, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Student-Focused Excellence",
      description: "We prioritize your academic goals and career aspirations above all else.",
    },
    {
      icon: Zap,
      title: "Fast & Efficient Process",
      description: "Streamlined application processes with AI-powered tools for quick results.",
    },
    {
      icon: Users,
      title: "Personalized Guidance",
      description: "Expert counselors provide tailored advice for your unique academic journey.",
    },
    {
      icon: Shield,
      title: "Trusted & Transparent",
      description: "Transparent processes, verified partnerships with top universities worldwide.",
    },
  ];

  const stats = [
    { number: "5000+", label: "Successful Admissions" },
    { number: "200+", label: "Partner Universities" },
    { number: "98%", label: "Visa Success Rate" },
    { number: "24/7", label: "Student Support" },
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
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">About Scholarix Global</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Pioneering Global Education
          </h2>

          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Since 2022, we've been transforming students' academic futures with expert guidance
            and AI-powered study abroad solutions.
          </p>
        </div>

        {/* Story */}
        <div className="glass-card p-8 lg:p-12 mb-16 glow-hover">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold">Our Story</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2022, Scholarix Global emerged from a simple belief: every student
                deserves expert guidance to achieve their international education dreams. We knew
                the process could be smoother, faster, and more successful.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we're proud to have helped 5000+ students gain admission to top universities
                worldwide, with a 98% visa success rate and partnerships with 200+ institutions.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower students with expert guidance, AI-powered tools, and personalized support
                that makes studying abroad accessible, affordable, and achievable for everyone.
              </p>
              <div className="flex items-center gap-3 p-4 glass-card">
                <TrendingUp className="w-8 h-8 text-accent flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground font-semibold">Machine Speed, Human Expertise. Real Results.</span>
                  <br />Our promise to every student.
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
