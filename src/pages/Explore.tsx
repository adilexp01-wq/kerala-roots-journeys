import { Search, Filter, MapPin, Clock, Star } from "lucide-react";
import { SearchBar } from "@/components/SearchBar";
import { FilterChip } from "@/components/FilterChip";
import { ExperienceCard } from "@/components/ExperienceCard";
import ayurvedaImage from "@/assets/ayurveda-experience.jpg";
import hillsImage from "@/assets/hills-spice.jpg";
import varkalaImage from "@/assets/varkala-living.jpg";

const categories = [
  "All Experiences",
  "Backwaters",
  "Hill Stations", 
  "Beaches",
  "Cultural",
  "Adventure",
  "Ayurveda"
];

const allExperiences = [
  {
    id: 1,
    image: ayurvedaImage,
    title: "Traditional Ayurveda Retreat",
    duration: "3 days",
    groupSize: "2-6 people",
    price: "₹8,500",
    highlights: ["herbal treatments", "yoga sessions", "meditation"]
  },
  {
    id: 2,
    image: hillsImage,
    title: "Munnar Tea Garden Trek",
    duration: "2 days",
    groupSize: "4-8 people", 
    price: "₹6,200",
    highlights: ["tea tasting", "mountain hiking", "wildlife spotting"]
  },
  {
    id: 3,
    image: varkalaImage,
    title: "Coastal Village Experience",
    duration: "4 days",
    groupSize: "3-10 people",
    price: "₹9,800",
    highlights: ["fishing lessons", "local cooking", "beach camping"]
  },
  {
    id: 4,
    image: ayurvedaImage,
    title: "Backwater Photography Tour",
    duration: "6 days",
    groupSize: "2-5 people",
    price: "₹14,500",
    highlights: ["photography workshop", "sunrise boat rides", "bird watching"]
  }
];

export const Explore = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="p-4 pt-12 bg-white sticky top-0 z-10 border-b">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">Explore Kerala</h1>
            <p className="text-muted-foreground">Discover hidden gems & local experiences</p>
          </div>
          <button className="p-2 rounded-full bg-muted">
            <Filter className="w-5 h-5" />
          </button>
        </div>
        
        <SearchBar placeholder="Search experiences, places..." />
      </div>

      <div className="p-4">
        {/* Categories */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Categories</h3>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <FilterChip
                key={category}
                active={index === 0}
                className="whitespace-nowrap"
              >
                {category}
              </FilterChip>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-muted/50 p-3 rounded-xl text-center">
            <div className="flex items-center justify-center mb-1">
              <MapPin className="w-4 h-4 text-primary" />
            </div>
            <p className="text-sm font-medium">200+</p>
            <p className="text-xs text-muted-foreground">Locations</p>
          </div>
          <div className="bg-muted/50 p-3 rounded-xl text-center">
            <div className="flex items-center justify-center mb-1">
              <Star className="w-4 h-4 text-yellow-500" />
            </div>
            <p className="text-sm font-medium">4.8</p>
            <p className="text-xs text-muted-foreground">Avg Rating</p>
          </div>
          <div className="bg-muted/50 p-3 rounded-xl text-center">
            <div className="flex items-center justify-center mb-1">
              <Clock className="w-4 h-4 text-secondary" />
            </div>
            <p className="text-sm font-medium">50+</p>
            <p className="text-xs text-muted-foreground">New This Month</p>
          </div>
        </div>

        {/* All Experiences */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">All Experiences</h3>
            <span className="text-sm text-muted-foreground">{allExperiences.length} found</span>
          </div>
          
          <div className="space-y-4">
            {allExperiences.map((experience) => (
              <ExperienceCard
                key={experience.id}
                {...experience}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};