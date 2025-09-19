import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

export const SearchBar = ({ 
  placeholder = "Search Kerala experiences...", 
  className 
}: SearchBarProps) => {
  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
      <Input
        type="text"
        placeholder={placeholder}
        className="pl-10 pr-4 py-3 rounded-2xl border-0 bg-white/95 backdrop-blur-sm shadow-sm text-base placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
};