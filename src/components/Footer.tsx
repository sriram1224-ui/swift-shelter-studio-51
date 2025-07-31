import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">RentEasy</h3>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Making rental housing accessible, transparent, and stress-free for the next generation of tenants.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Stay Updated</h4>
              <div className="flex gap-2 max-w-md">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                />
                <Button variant="hero" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2 text-gray-300">
              <a href="#" className="block hover:text-white transition-colors">Browse Listings</a>
              <a href="#" className="block hover:text-white transition-colors">How It Works</a>
              <a href="#" className="block hover:text-white transition-colors">Pricing</a>
              <a href="#" className="block hover:text-white transition-colors">About Us</a>
            </div>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <div className="space-y-2 text-gray-300">
              <a href="#" className="block hover:text-white transition-colors">Help Center</a>
              <a href="#" className="block hover:text-white transition-colors">Contact Us</a>
              <a href="#" className="block hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="block hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm">
            © 2024 RentEasy. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;