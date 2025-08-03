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
          <div className="flex items-center gap-3">
            {/* Login Button */}
            <Button 
              variant="ghost" 
              className="group relative overflow-hidden h-10 px-3 hover:px-6 min-w-[40px] hover:min-w-[80px] bg-transparent hover:bg-primary/10 border-0 transition-all duration-500 ease-out rounded-xl"
            >
              <div className="flex items-center justify-center">
                <LogIn className="w-5 h-5 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-75 group-hover:-translate-x-2" />
                <span className="absolute whitespace-nowrap font-medium text-sm opacity-0 scale-75 translate-x-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0">
                  Login
                </span>
              </div>
            </Button>
            
            {/* Signup Button */}
            <Button 
              variant="outline" 
              className="group relative overflow-hidden h-10 px-3 hover:px-6 min-w-[40px] hover:min-w-[90px] border border-border hover:border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-500 ease-out rounded-xl shadow-sm hover:shadow-lg"
            >
              <div className="flex items-center justify-center">
                <UserPlus className="w-5 h-5 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-75 group-hover:-translate-x-2" />
                <span className="absolute whitespace-nowrap font-medium text-sm opacity-0 scale-75 translate-x-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0">
                  Sign Up
                </span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;