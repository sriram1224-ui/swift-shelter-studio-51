const partners = [
  { name: "ApartmentList", icon: "🏢" },
  { name: "Zillow", icon: "🏠" },
  { name: "Rent.com", icon: "🔑" },
  { name: "PadMapper", icon: "📍" },
  { name: "HotPads", icon: "🔥" },
  { name: "Realtor.com", icon: "🏘️" }
];

const TrustedPartnersSection = () => {
  return (
    <section className="py-16 bg-white/50 backdrop-blur-sm border-y border-gray-100">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h3 className="text-2xl font-semibold text-foreground mb-2">
            Trusted by leading rental platforms
          </h3>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className={`flex items-center gap-3 text-gray-600 hover:text-primary transition-colors duration-300 animate-fade-in hover-scale group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                {partner.icon}
              </span>
              <span className="text-lg font-medium">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnersSection;