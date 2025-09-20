import { Home, Search, Calendar, Users, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "home", path: "/", icon: Home, label: "Home" },
  { id: "explore", path: "/explore", icon: Search, label: "Explore" },
  { id: "trips", path: "/trips", icon: Calendar, label: "Trips" },
  { id: "community", path: "/community", icon: Users, label: "Community" },
  { id: "profile", path: "/profile", icon: User, label: "Profile" },
];

interface BottomNavProps {
  className?: string;
  isVisible?: boolean;
}

export const BottomNav = ({ className, isVisible = true }: BottomNavProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const handleNavClick = (path: string) => {
    // Add haptic feedback (if supported)
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
    navigate(path);
  };

  return (
    <nav
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        "bg-white/80 backdrop-blur-xl border-t border-border/20",
        "shadow-[0_-8px_32px_rgba(0,0,0,0.12)]",
        "before:absolute before:inset-0 before:bg-gradient-to-t before:from-white/5 before:to-transparent before:pointer-events-none",
        !isVisible && "translate-y-full",
        className
      )}
    >
      {/* Glassmorphism glow effect */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-sunset/30 to-transparent" />
      
      <div className="h-16 flex items-center justify-around px-1 relative">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.path)}
              className={cn(
                "flex flex-col items-center justify-center min-h-[44px] min-w-[44px] px-2 py-1",
                "transition-all duration-300 ease-out relative group",
                "flex-1 max-w-[20%] rounded-xl",
                "hover:bg-white/20 active:scale-95",
                active && "bg-gradient-to-br from-sunset/10 to-palm/10"
              )}
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              {/* Active background glow */}
              {active && (
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-sunset/20 to-palm/20 animate-pulse" />
              )}
              
              {/* Icon with enhanced styling */}
              <div className={cn(
                "relative z-10 transition-all duration-300 ease-out",
                "group-hover:scale-110 group-active:scale-95",
                active && "drop-shadow-lg"
              )}>
                <Icon 
                  className={cn(
                    "transition-all duration-300",
                    active 
                      ? "w-[28px] h-[28px] text-sunset drop-shadow-sm" 
                      : "w-6 h-6 text-muted-foreground group-hover:text-foreground"
                  )}
                />
              </div>
              
              {/* Label with modern styling */}
              <span
                className={cn(
                  "text-[10px] font-medium mt-1 transition-all duration-300 relative z-10",
                  "group-hover:scale-105",
                  active 
                    ? "text-sunset font-semibold" 
                    : "text-muted-foreground group-hover:text-foreground"
                )}
              >
                {item.label}
              </span>
              
              {/* Modern active indicator */}
              {active && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 transition-all duration-300">
                  <div className="w-1 h-1 bg-sunset rounded-full animate-pulse" />
                </div>
              )}
              
              {/* Ripple effect on tap */}
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-active:from-white/30 group-active:to-white/10 transition-all duration-150" />
              </div>
            </button>
          );
        })}
      </div>
      
      {/* Bottom safe area */}
      <div className="h-safe-area-inset-bottom bg-gradient-to-t from-white/80 to-transparent" />
    </nav>
  );
};