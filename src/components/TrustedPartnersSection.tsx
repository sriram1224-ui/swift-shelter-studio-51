const partners = [
  { 
    name: "ApartmentList", 
    logo: "AL",
    description: "Leading rental marketplace"
  },
  { 
    name: "Zillow", 
    logo: "Z",
    description: "Real estate platform"
  },
  { 
    name: "Rent.com", 
    logo: "R",
    description: "Rental listings network"
  },
  { 
    name: "PadMapper", 
    logo: "PM",
    description: "Map-based search"
  },
  { 
    name: "HotPads", 
    logo: "HP",
    description: "Property discovery"
  },
  { 
    name: "Realtor.com", 
    logo: "RC",
    description: "MLS property portal"
  }
];

const TrustedPartnersSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-secondary/5">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-secondary/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Platform Integration
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform seamlessly integrates with the most trusted names in real estate, 
            ensuring maximum exposure for your properties.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative p-6 rounded-2xl bg-card/60 backdrop-blur-md border border-border/50 hover:bg-card/80 hover:border-primary/20 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl">
                {/* Logo circle */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                  <span className="text-xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                    {partner.logo}
                  </span>
                </div>
                
                {/* Partner name */}
                <h3 className="text-sm font-semibold text-foreground text-center mb-2 group-hover:text-primary transition-colors duration-300">
                  {partner.name}
                </h3>
                
                {/* Description */}
                <p className="text-xs text-muted-foreground text-center">
                  {partner.description}
                </p>

                {/* Decorative element */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary font-medium">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            API Certified & Verified Partners
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnersSection;