import { Button } from "@/components/ui/button";
import { Smartphone, Download } from "lucide-react";
import appMockup from "@/assets/app-mockup.jpg";

const AppPreviewSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* App Mockup */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-[600px] bg-gradient-to-br from-foreground to-warm-gray rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <img 
                    src={appMockup}
                    alt="RentEasy mobile app interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-white rounded-full p-3 shadow-lg animate-bounce">
                <Smartphone className="w-6 h-6" />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold leading-tight">
                Take RentEasy
                <span className="block text-primary">
                  Anywhere You Go
                </span>
              </h2>
              <p className="text-xl text-warm-gray leading-relaxed">
                Browse listings, schedule viewings, and manage your rental applications right from your phone. Available on iOS and Android.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-warm-gray">Instant property notifications</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-warm-gray">Virtual tour booking</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-warm-gray">Secure in-app messaging</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="soft" className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download on App Store
              </Button>
              <Button variant="soft" className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                Get it on Google Play
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreviewSection;