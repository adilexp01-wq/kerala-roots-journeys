import { useState, useEffect } from "react";
import { Bell, User, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TopNavProps {
  title?: string;
  subtitle?: string;
  variant?: "default" | "transparent" | "solid";
  showSearch?: boolean;
  className?: string;
}

export const TopNav = ({ 
  title = "TravelExp", 
  subtitle = "Kerala Experiences",
  variant = "transparent",
  showSearch = false,
  className 
}: TopNavProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        variant === "transparent" && [
          "bg-white/10 backdrop-blur-md border-b border-white/10",
          isScrolled && "bg-white/90 backdrop-blur-xl border-b border-border/20 shadow-lg"
        ],
        variant === "solid" && "bg-background border-b border-border shadow-sm",
        variant === "default" && "bg-background/80 backdrop-blur-md border-b border-border/50",
        className
      )}
    >
      <div className="flex items-center justify-between px-4 py-3 pt-safe-area-inset-top">
        {/* Left Section */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sunset to-palm flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-white/90" />
          </div>
          <div>
            <h1 className={cn(
              "text-lg font-bold transition-colors",
              variant === "transparent" && !isScrolled ? "text-white" : "text-foreground"
            )}>
              {title}
            </h1>
            {subtitle && (
              <p className={cn(
                "text-xs transition-colors",
                variant === "transparent" && !isScrolled 
                  ? "text-white/80" 
                  : "text-muted-foreground"
              )}>
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2">
          {showSearch && (
            <Button 
              size="icon" 
              variant="ghost" 
              className={cn(
                "transition-colors hover:scale-105 transition-transform",
                variant === "transparent" && !isScrolled 
                  ? "text-white hover:bg-white/20" 
                  : "text-foreground hover:bg-accent"
              )}
            >
              <Search className="w-5 h-5" />
            </Button>
          )}
          
          <Button 
            size="icon" 
            variant="ghost" 
            className={cn(
              "relative transition-colors hover:scale-105 transition-transform",
              variant === "transparent" && !isScrolled 
                ? "text-white hover:bg-white/20" 
                : "text-foreground hover:bg-accent"
            )}
          >
            <Bell className="w-5 h-5" />
            {/* Notification dot */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-sunset rounded-full border-2 border-white animate-pulse" />
          </Button>
          
          <Button 
            size="icon" 
            variant="ghost" 
            className={cn(
              "transition-colors hover:scale-105 transition-transform",
              variant === "transparent" && !isScrolled 
                ? "text-white hover:bg-white/20" 
                : "text-foreground hover:bg-accent"
            )}
          >
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};