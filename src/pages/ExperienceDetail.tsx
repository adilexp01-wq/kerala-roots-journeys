import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Share2, Clock, Users, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ayurvedaImage from "@/assets/ayurveda-experience.jpg";

const imageCarousel = [
  ayurvedaImage,
  ayurvedaImage, // In a real app, these would be different images
  ayurvedaImage
];

const highlights = [
  "Cooking with locals",
  "Waterfall trek", 
  "Ayurveda workshop",
  "Traditional boat ride",
  "Spice garden visit"
];

export const ExperienceDetail = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12 bg-white sticky top-0 z-10 border-b">
        <Button size="icon" variant="ghost" onClick={() => window.history.back()}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="font-semibold">Experience Details</h1>
        <div className="flex gap-2">
          <Button size="icon" variant="ghost">
            <Share2 className="w-5 h-5" />
          </Button>
          <Button 
            size="icon" 
            variant="ghost"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="relative">
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {imageCarousel.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Experience image ${index + 1}`}
              className="w-full h-64 object-cover flex-shrink-0 snap-start"
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
        
        {/* Image indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {imageCarousel.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title and Rating */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">4.8</span>
              <span className="text-sm text-muted-foreground">(127 reviews)</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2">Backwaters & Ayurveda Experience</h2>
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Alleppey & Kumarakom, Kerala</span>
          </div>
        </div>

        {/* Quick Info */}
        <div className="flex gap-6 mb-6 p-4 bg-muted rounded-xl">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Duration</p>
              <p className="font-medium">5 days</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Group Size</p>
              <p className="font-medium">4-8 people</p>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold gradient-text">₹12,500</span>
            <span className="text-muted-foreground">per person</span>
          </div>
          <p className="text-sm text-muted-foreground">All inclusive • No hidden fees</p>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Experience Highlights</h3>
          <div className="flex flex-wrap gap-2">
            {highlights.map((highlight, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {highlight}
              </Badge>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">About This Experience</h3>
          <p className="text-muted-foreground leading-relaxed">
            Immerse yourself in the authentic Kerala lifestyle with this unique 5-day journey through 
            the famous backwaters and traditional Ayurveda practices. Cook with local families, 
            learn ancient healing techniques, and navigate serene waterways in traditional houseboats.
          </p>
        </div>

        {/* What's Included */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">What's Included</h3>
          <div className="space-y-2">
            {[
              "Traditional houseboat accommodation",
              "All meals with local families",
              "Ayurveda workshop and treatments",
              "Professional local guide",
              "All transportation",
              "Cooking classes"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="sticky bottom-0 bg-white border-t p-4">
        <Button 
          className="w-full py-3 text-lg font-semibold"
          onClick={() => navigate("/booking")}
        >
          Join this Journey
        </Button>
      </div>
    </div>
  );
};