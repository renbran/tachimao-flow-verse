import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search, ArrowLeft, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at 25% 25%, hsl(213 100% 50% / 0.3) 0%, transparent 50%),
                         radial-gradient(circle at 75% 75%, hsl(263 85% 65% / 0.3) 0%, transparent 50%)`
          }}
        ></div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/10 blur-2xl float-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-secondary/10 blur-2xl float-animation" style={{animationDelay: '1s'}}></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6 py-20">
          <div className="glass-card p-12 lg:p-16">
            {/* 404 Number */}
            <h1 className="text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-none mb-6">
              404
            </h1>

            {/* Error Message */}
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Page Not Found
              </h2>
              <p className="text-lg lg:text-xl text-muted-foreground">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </div>

            {/* Path Info */}
            <div className="glass-card p-4 mb-8 inline-block">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold">Attempted path:</span>{" "}
                <code className="text-primary">{location.pathname}</code>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Return Home
                </Button>
              </Link>

              <Button
                variant="outline"
                size="lg"
                onClick={() => window.history.back()}
                className="glass border-glass-border/50 px-8 py-6 rounded-full group hover:border-primary"
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Go Back
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="mt-12 pt-8 border-t border-glass-border/30">
              <p className="text-sm text-muted-foreground mb-4">
                Looking for something specific?
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/" className="text-sm text-primary hover:text-accent transition-colors">
                  Home
                </Link>
                <span className="text-muted-foreground">•</span>
                <a href="/#solutions" className="text-sm text-primary hover:text-accent transition-colors">
                  Solutions
                </a>
                <span className="text-muted-foreground">•</span>
                <a href="/#about" className="text-sm text-primary hover:text-accent transition-colors">
                  About
                </a>
                <span className="text-muted-foreground">•</span>
                <Link to="/onboarding-flowchart" className="text-sm text-primary hover:text-accent transition-colors">
                  Onboarding Flow
                </Link>
                <span className="text-muted-foreground">•</span>
                <a href="/#contact" className="text-sm text-primary hover:text-accent transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
