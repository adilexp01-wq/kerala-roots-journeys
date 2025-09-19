import { useState } from "react";
import { Calendar, Clock, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import ayurvedaImage from "@/assets/ayurveda-experience.jpg";
import hillsImage from "@/assets/hills-spice.jpg";

const tabs = ["Upcoming", "Completed", "Cancelled"];

const upcomingTrips = [
  {
    id: 1,
    title: "Backwaters & Ayurveda",
    image: ayurvedaImage,
    date: "Dec 15, 2024",
    duration: "5 days",
    location: "Alleppey, Kerala",
    status: "confirmed",
    travelers: 2,
    bookingRef: "KE123456"
  },
  {
    id: 2,
    title: "Hills & Spice Trails",
    image: hillsImage,
    date: "Jan 8, 2025",
    duration: "7 days", 
    location: "Munnar, Kerala",
    status: "pending",
    travelers: 4,
    bookingRef: "KE123457"
  }
];

const completedTrips = [
  {
    id: 3,
    title: "Local Living in Varkala",
    image: ayurvedaImage,
    date: "Nov 2, 2024",
    duration: "3 days",
    location: "Varkala, Kerala",
    status: "completed",
    travelers: 2,
    bookingRef: "KE123455"
  }
];

export const Trips = () => {
  const [activeTab, setActiveTab] = useState("Upcoming");

  const getTripsForTab = (tab: string) => {
    switch (tab) {
      case "Upcoming":
        return upcomingTrips;
      case "Completed":
        return completedTrips;
      case "Cancelled":
        return [];
      default:
        return [];
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const currentTrips = getTripsForTab(activeTab);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="p-4 pt-12 bg-white sticky top-0 z-10 border-b">
        <h1 className="text-2xl font-bold mb-4">My Trips</h1>
        
        {/* Tabs */}
        <div className="flex gap-1 bg-muted p-1 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-white text-foreground shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4">
        {currentTrips.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No {activeTab.toLowerCase()} trips</h3>
            <p className="text-muted-foreground mb-6">
              {activeTab === "Upcoming" 
                ? "Ready for your next Kerala adventure?"
                : `No ${activeTab.toLowerCase()} trips to show`}
            </p>
            {activeTab === "Upcoming" && (
              <Button>Explore Experiences</Button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {currentTrips.map((trip) => (
              <Card key={trip.id} className="overflow-hidden">
                <div className="flex">
                  <img 
                    src={trip.image} 
                    alt={trip.title}
                    className="w-24 h-24 object-cover"
                  />
                  <div className="flex-1 p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-base line-clamp-1">
                        {trip.title}
                      </h3>
                      <Badge 
                        variant="secondary"
                        className={getStatusColor(trip.status)}
                      >
                        {trip.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-1 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{trip.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{trip.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{trip.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">
                        {trip.travelers} {trip.travelers === 1 ? 'traveler' : 'travelers'}
                      </span>
                      <button className="flex items-center gap-1 text-primary text-sm font-medium">
                        View Details
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};