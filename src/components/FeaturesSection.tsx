import { CheckCircle, Clock, Shield, Headphones } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Verified Listings",
    description: "Every property is personally verified by our team for quality and authenticity."
  },
  {
    icon: Clock,
    title: "Instant Booking",
    description: "Book your perfect home in minutes with our streamlined application process."
  },
  {
    icon: Shield,
    title: "Flexible Rentals",
    description: "Choose from monthly, quarterly, or yearly leases that fit your lifestyle."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated team is always here to help with any questions or concerns."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">RentEasy</span>?
          </h2>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            We make finding and renting your perfect home simple, secure, and stress-free.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-soft hover:shadow-card transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-soft-blue rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-warm-gray leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;