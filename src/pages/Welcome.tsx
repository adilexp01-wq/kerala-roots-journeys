import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, Users, Calendar, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import keralaSunset from "@/assets/kerala-hero.jpg";

const WelcomeSlide = ({ 
  icon: Icon, 
  title, 
  description, 
  image 
}: {
  icon: any;
  title: string;
  description: string;
  image?: string;
}) => (
  <div className="flex flex-col items-center text-center px-8 py-12">
    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sunset to-sunset/80 flex items-center justify-center mb-6">
      <Icon className="w-10 h-10 text-white" />
    </div>
    <h2 className="text-2xl font-bold text-foreground mb-4">{title}</h2>
    <p className="text-muted-foreground text-lg leading-relaxed max-w-sm">{description}</p>
  </div>
);

export const Welcome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      icon: MapPin,
      title: "Discover Hidden Kerala",
      description: "Explore authentic local experiences beyond tourist trails - from misty hills to serene backwaters."
    },
    {
      icon: Users,
      title: "Join Fellow Travelers", 
      description: "Connect with like-minded adventurers and experience Kerala's culture through community living."
    },
    {
      icon: Calendar,
      title: "Curated Journeys",
      description: "Choose from expertly crafted 1-week or 2-week packages designed by local Kerala experts."
    },
    {
      icon: Star,
      title: "Authentic Experiences",
      description: "Cook with locals, learn Ayurveda, trek hidden waterfalls, and create memories that last forever."
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate("/");
    }
  };

  const skipToApp = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${keralaSunset})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <div className="flex justify-between items-center p-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-palm to-backwater" />
            <span className="text-2xl font-bold text-foreground">TravelExp</span>
          </div>
          <Button 
            variant="ghost" 
            onClick={skipToApp}
            className="text-muted-foreground hover:text-foreground"
          >
            Skip
          </Button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center">
          <WelcomeSlide {...slides[currentSlide]} />
        </div>

        {/* Bottom Section */}
        <div className="p-6 space-y-6">
          {/* Progress Dots */}
          <div className="flex justify-center space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-sunset" : "bg-muted"
                }`}
              />
            ))}
          </div>

          {/* Action Button */}
          <Button 
            onClick={nextSlide}
            className="w-full h-12 bg-gradient-to-r from-sunset to-sunset/90 hover:from-sunset/90 hover:to-sunset text-white font-semibold rounded-xl shadow-lg"
          >
            {currentSlide === slides.length - 1 ? "Start Exploring" : "Continue"}
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>

          {/* Bottom Text */}
          <p className="text-center text-sm text-muted-foreground">
            Join thousands discovering Kerala's hidden gems
          </p>
        </div>
      </div>
    </div>
  );
};