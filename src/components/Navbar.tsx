import { Button } from "@/components/ui/button";
import { LogIn, UserPlus } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Professional Text Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Estate
              </span>
              <span className="text-foreground font-light">Hub</span>
            </div>
          </div>
          
          {/* Login/Signup Buttons */}
          <div className="flex items-center gap-4">
            {/* Login Button */}
            <Button 
              variant="ghost" 
              size="sm"
              className="group relative overflow-hidden px-3 py-2 hover:bg-primary/10 transition-all duration-300"
            >
              <LogIn className="w-5 h-5 group-hover:scale-0 transition-transform duration-300" />
              <span className="absolute inset-0 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300 font-medium">
                Login
              </span>
            </Button>
            
            {/* Signup Button */}
            <Button 
              variant="outline" 
              size="sm"
              className="group relative overflow-hidden px-3 py-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <UserPlus className="w-5 h-5 group-hover:scale-0 transition-transform duration-300" />
              <span className="absolute inset-0 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300 font-medium">
                Sign Up
              </span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;