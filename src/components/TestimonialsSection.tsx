import sarahImage from "@/assets/testimonial-sarah.jpg";
import mikeImage from "@/assets/testimonial-mike.jpg";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Manager",
    image: sarahImage,
    quote: "Found my perfect apartment in just 2 hours! The process was incredibly smooth and the support team was amazing throughout."
  },
  {
    name: "Mike Rodriguez", 
    role: "Software Developer",
    image: mikeImage,
    quote: "The verified listings gave me confidence, and the flexible rental terms were exactly what I needed as a remote worker."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-soft-blue to-accent">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            What Our Tenants Say
          </h2>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            Join thousands of happy tenants who found their perfect home with us.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-white shadow-lg"
                />
                <div>
                  <h4 className="font-semibold text-lg text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-warm-gray">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
              <blockquote className="text-lg text-foreground leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex text-primary mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;