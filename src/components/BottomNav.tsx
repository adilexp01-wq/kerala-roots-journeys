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
        "fixed bottom-0 left-0 right-0 bg-white border-t transition-transform duration-300 z-50",
        "h-16 flex items-center justify-around px-2",
        "shadow-[0_-2px_6px_rgba(0,0,0,0.15)]",
        !isVisible && "translate-y-full",
        className
      )}
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = isActive(item.path);
        
        return (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.path)}
            className={cn(
              "flex flex-col items-center justify-center min-h-[44px] min-w-[44px] px-2 py-1",
              "transition-all duration-200 relative group",
              "flex-1 max-w-[20%]"
            )}
          >
            <Icon 
              className={cn(
                "transition-all duration-200",
                active 
                  ? "w-[26px] h-[26px] text-sunset-orange" 
                  : "w-6 h-6 text-gray-500"
              )}
            />
            <span
              className={cn(
                "text-[10px] font-medium mt-1 transition-colors duration-200",
                active ? "text-sunset-orange" : "text-gray-500"
              )}
            >
              {item.label}
            </span>
            
            {/* Active indicator */}
            {active && (
              <div className="absolute bottom-0 w-8 h-0.5 bg-palm-green rounded-full" />
            )}
          </button>
        );
      })}
    </nav>
  );
};