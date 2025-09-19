import { Heart, Users, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  image: string;
  title: string;
  duration: string;
  groupSize: string;
  price: string;
  highlights: string[];
  className?: string;
  onClick?: () => void;
}

export const ExperienceCard = ({
  image,
  title,
  duration,
  groupSize,
  price,
  highlights,
  className,
  onClick
}: ExperienceCardProps) => {
  return (
    <div 
      className={cn("experience-card cursor-pointer", className)}
      onClick={onClick}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white transition-colors">
          <Heart className="w-4 h-4 text-palm-green" />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-2">
          {title}
        </h3>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{groupSize}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {highlights.slice(0, 2).map((highlight, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-muted text-xs rounded-md"
            >
              {highlight}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold gradient-text">
            {price}
          </span>
          <span className="text-sm text-muted-foreground">per person</span>
        </div>
      </div>
    </div>
  );
};