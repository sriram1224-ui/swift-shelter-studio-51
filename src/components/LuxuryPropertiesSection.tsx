import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const LuxuryPropertiesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Premium Collection
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Luxury Properties
          </h2>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto">
            Discover exceptional homes where modern architecture meets unparalleled comfort. 
            Each property is carefully curated for the most discerning tenants.
          </p>
        </div>

        {/* Main Villa Showcase */}
        <div className="relative max-w-6xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] group">
            {/* Villa Image with Overlay */}
            <div className="relative h-[600px] lg:h-[700px]">
              <img 
                src="/lovable-uploads/51faf773-5ee9-4e4e-98d8-fa7f3708da4b.png"
                alt="Luxury Modern Villa with Pool"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
              
              {/* Luxury Badge */}
              <Badge className="absolute top-8 left-8 bg-primary text-white px-4 py-2 text-sm font-semibold">
                ✨ Ultra Luxury
              </Badge>
              
              {/* Price Tag */}
              <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg">
                <div className="text-2xl font-bold text-primary">$12,500</div>
                <div className="text-sm text-warm-gray">per month</div>
              </div>
            </div>

            {/* Property Information Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <div className="max-w-4xl">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Modern Architectural Masterpiece
                </h3>
                <p className="text-lg text-gray-200 mb-6 max-w-2xl">
                  A stunning contemporary villa featuring floor-to-ceiling windows, 
                  infinity pool, and panoramic views. Perfect blend of luxury and minimalist design.
                </p>
                
                {/* Property Features */}
                <div className="flex flex-wrap gap-6 mb-8 text-white">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium">5 Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium">4 Bathrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium">4,500 sqft</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium">Infinity Pool</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium">Ocean Views</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-semibold"
                  >
                    Schedule Private Tour
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-foreground px-8 py-3 rounded-xl font-semibold backdrop-blur-sm"
                  >
                    View Floor Plans
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Luxury Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="text-center p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-2 text-foreground">Premium Concierge</h4>
            <p className="text-warm-gray">24/7 dedicated concierge service for all luxury property residents</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-2 text-foreground">Verified Luxury</h4>
            <p className="text-warm-gray">Every luxury property undergoes rigorous quality and authenticity verification</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-2 text-foreground">Instant Booking</h4>
            <p className="text-warm-gray">Skip the waiting lists - book your luxury property instantly online</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryPropertiesSection;