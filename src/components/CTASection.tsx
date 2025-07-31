import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const CTASection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-soft-blue/30 to-accent/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjMTJCOTgxIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxwYXRoIGQ9Ik02MCA2MEwzMCAzMHY2MGg2MFYzMEw2MCA2MHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Join our community
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Ready to Find Your{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Perfect Home?
              </span>
            </h2>
            
            <p className="text-xl text-warm-gray max-w-2xl mx-auto leading-relaxed">
              Get early access to new listings and exclusive rental deals. Join thousands of satisfied tenants.
            </p>
          </div>

          {/* Email subscription form */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 px-6 text-lg border-2 border-gray-200 focus:border-primary rounded-2xl"
                required
              />
              <Button 
                type="submit" 
                size="lg" 
                className="h-14 px-8 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
                variant="hero"
              >
                Subscribe
              </Button>
            </form>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
            >
              Browse Listings
            </Button>
            <Button 
              variant="hero-outline" 
              size="lg" 
              className="text-lg px-8 py-6 rounded-2xl border-2 hover:shadow-lg transition-all duration-300 hover-scale"
            >
              Talk to Us
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-warm-gray animate-fade-in" style={{ animationDelay: "0.9s" }}>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No spam, unsubscribe anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>Your data is secure with us</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-primary/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-warm-orange/20 rounded-full animate-pulse" style={{ animationDelay: "3s" }}></div>
    </section>
  );
};

export default CTASection;