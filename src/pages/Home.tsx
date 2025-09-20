import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "@/components/SearchBar";
import { FilterChip } from "@/components/FilterChip";
import { ExperienceCard } from "@/components/ExperienceCard";
import { TopNav } from "@/components/TopNav";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/kerala-hero.jpg";
import ayurvedaImage from "@/assets/ayurveda-experience.jpg";
import hillsImage from "@/assets/hills-spice.jpg";
import varkalaImage from "@/assets/varkala-living.jpg";

const filters = [
  "1 Week Plan",
  "2 Week Plan", 
  "Hidden Spots",
  "Community Stays"
];

const featuredExperiences = [
  {
    id: 1,
    image: ayurvedaImage,
    title: "Backwaters & Ayurveda",
    duration: "5 days",
    groupSize: "4-8 people",
    price: "₹12,500",
    highlights: ["cooking with locals", "ayurveda workshop", "houseboat stay"]
  },
  {
    id: 2,
    image: hillsImage,
    title: "Hills & Spice Trails",
    duration: "7 days",
    groupSize: "6-10 people", 
    price: "₹15,800",
    highlights: ["waterfall trek", "spice plantation", "tea tasting"]
  },
  {
    id: 3,
    image: varkalaImage,
    title: "Local Living in Varkala",
    duration: "3 days",
    groupSize: "2-6 people",
    price: "₹8,200",
    highlights: ["fishing with locals", "cliff walks", "beach yoga"]
  }
];

export const Home = () => {
  const [activeFilter, setActiveFilter] = useState("1 Week Plan");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Modern Top Navigation */}
      <TopNav variant="transparent" />
      
      {/* Modern Hero Section */}
      <div className="relative h-screen flex flex-col justify-center items-center text-white px-4 overflow-hidden">
        {/* Dynamic Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] ease-linear hover:scale-105"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
        
        {/* Animated Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-palm/60 via-backwater/40 to-sunset/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-40 right-16 w-24 h-24 bg-sunset/20 rounded-full blur-lg animate-pulse delay-1000" />
          <div className="absolute bottom-32 left-20 w-20 h-20 bg-palm/20 rounded-full blur-md animate-pulse delay-2000" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-lg mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 animate-scale-in">
            <span className="text-sm font-medium">✨ Authentic Kerala Experiences</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Discover
            <span className="block bg-gradient-to-r from-sunset via-white to-palm bg-clip-text text-transparent animate-pulse">
              Hidden Kerala
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 font-light leading-relaxed">
            Join locals for authentic experiences beyond tourist trails
          </p>
          
          {/* Search Bar with Modern Styling */}
          <div className="mb-8 animate-slide-in-right delay-300">
            <SearchBar className="shadow-2xl" />
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-right delay-500">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-sunset to-sunset/80 hover:from-sunset/90 hover:to-sunset/70 text-white font-semibold px-8 py-3 rounded-xl shadow-2xl hover:shadow-sunset/25 transition-all duration-300 hover:scale-105"
            >
              Start Your Journey
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Watch Stories
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mt-12 animate-fade-in delay-700">
            <div className="text-center">
              <div className="text-2xl font-bold text-sunset">500+</div>
              <div className="text-sm opacity-80">Experiences</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-palm">2K+</div>
              <div className="text-sm opacity-80">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-backwater">50+</div>
              <div className="text-sm opacity-80">Local Guides</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6">
        {/* Quick Filters */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Quick Filters</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <FilterChip
                key={filter}
                active={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className="whitespace-nowrap"
              >
                {filter}
              </FilterChip>
            ))}
          </div>
        </div>

        {/* Featured Experiences */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Featured Experiences</h3>
          <div className="space-y-4">
            {featuredExperiences.map((experience) => (
              <ExperienceCard
                key={experience.id}
                {...experience}
                onClick={() => navigate(`/experience/${experience.id}`)}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-muted rounded-2xl p-6 text-center">
          <h4 className="text-lg font-semibold mb-2">Join Our Community</h4>
          <p className="text-muted-foreground mb-4">
            Connect with fellow travelers and locals for authentic Kerala experiences
          </p>
          <Button className="w-full">
            Explore Community
          </Button>
        </div>
      </div>
    </div>
  );
};