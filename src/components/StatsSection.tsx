import { Button } from "@/components/ui/button";
import statsBgIllustration from "@/assets/stats-bg-illustration.jpg";

const stats = [
  {
    number: "10k+",
    label: "Happy Tenants",
    description: "Satisfied residents nationwide",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    number: "2.5k+", 
    label: "Verified Properties",
    description: "Premium locations available",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    number: "4.9",
    label: "Average Rating",
    description: "Based on verified reviews",
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    )
  },
  {
    number: "24/7",
    label: "Support Available", 
    description: "Round-the-clock assistance",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const StatsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Stunning illustration background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${statsBgIllustration})` }}
      ></div>
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
      
      {/* Floating geometric decorations */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-primary/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-12 h-12 bg-accent/30 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-secondary/40 rounded-full animate-ping delay-500"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform has become the preferred choice for discerning renters and property owners worldwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative p-8 rounded-2xl bg-card/80 backdrop-blur-md border border-border hover:bg-card/90 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl">
                {/* Icon */}
                <div className="text-primary mb-6 group-hover:text-primary/80 transition-colors duration-300 group-hover:scale-110 transform transition-transform">
                  {stat.icon}
                </div>
                
                {/* Number */}
                <div className="text-4xl lg:text-5xl font-bold text-foreground mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                  {stat.label === "Average Rating" && <span className="text-2xl">★</span>}
                </div>
                
                {/* Label */}
                <div className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                
                {/* Description */}
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>

                {/* Decorative element */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <p className="text-muted-foreground text-lg mb-6">
            Join thousands of satisfied users who've found their perfect home
          </p>
          <Button 
            size="lg" 
            className="px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;