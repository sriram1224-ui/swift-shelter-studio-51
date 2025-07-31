import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const properties = [
  {
    id: 1,
    title: "Modern Downtown Loft",
    location: "New York, NY",
    price: "$3,200/month",
    bedrooms: 2,
    bathrooms: 2,
    sqft: "1,200",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
    badge: "Available Now",
    features: ["Pet Friendly", "Gym Access", "Roof Terrace"]
  },
  {
    id: 2,
    title: "Luxury Penthouse",
    location: "San Francisco, CA",
    price: "$4,800/month",
    bedrooms: 3,
    bathrooms: 3,
    sqft: "1,800",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
    badge: "Premium",
    features: ["City Views", "Concierge", "Pool"]
  },
  {
    id: 3,
    title: "Cozy Studio Apartment",
    location: "Austin, TX",
    price: "$1,800/month",
    bedrooms: 1,
    bathrooms: 1,
    sqft: "600",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
    badge: "Hot Deal",
    features: ["Downtown", "Transit", "Furnished"]
  }
];

const FeaturedPropertiesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-soft-blue/20 to-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Featured Properties
          </h2>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            Handpicked apartments available for immediate booking
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {properties.map((property, index) => (
            <div 
              key={property.id}
              className={`group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <img 
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <Badge 
                  className="absolute top-4 left-4 bg-primary text-white"
                >
                  {property.badge}
                </Badge>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {property.title}
                  </h3>
                  <p className="text-warm-gray flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {property.location}
                  </p>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div className="text-2xl font-bold text-primary">
                    {property.price}
                  </div>
                  <div className="flex gap-4 text-sm text-warm-gray">
                    <span>{property.bedrooms} bed</span>
                    <span>{property.bathrooms} bath</span>
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {property.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <Button 
                  className="w-full group-hover:bg-primary-glow transition-colors duration-300"
                  variant="hero"
                >
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <Button variant="outline" size="lg" className="px-8">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesSection;