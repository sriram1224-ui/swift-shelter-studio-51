const stats = [
  {
    number: "10k+",
    label: "Happy Tenants",
    icon: "👥"
  },
  {
    number: "2.5k+", 
    label: "Verified Properties",
    icon: "🏠"
  },
  {
    number: "4.9★",
    label: "Average Rating",
    icon: "⭐"
  },
  {
    number: "24/7",
    label: "Support Available", 
    icon: "🕒"
  }
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary-glow to-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSI3IiBjeT0iNyIgcj0iNyIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center group animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl mb-2 block">
                  {stat.icon}
                </span>
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-lg text-white/90 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Animated circles */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
    </section>
  );
};

export default StatsSection;