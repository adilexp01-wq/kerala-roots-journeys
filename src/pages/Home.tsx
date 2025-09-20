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
      
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] flex flex-col justify-center items-center text-white px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(46, 94, 62, 0.4), rgba(37, 109, 133, 0.4)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >

        {/* Hero Content */}
        <div className="text-center max-w-md mx-auto mt-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-3">
            Discover Hidden
            <span className="block gradient-text">Kerala</span>
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Authentic experiences with locals who know Kerala best
          </p>
          
          <SearchBar className="mb-6" />
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