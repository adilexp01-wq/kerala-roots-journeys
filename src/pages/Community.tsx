import { useState } from "react";
import { Calendar, Users, MessageCircle, Heart, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const upcomingEvents = [
  {
    id: 1,
    title: "Onam Celebration in Kochi",
    date: "Dec 25, 2024",
    time: "6:00 PM",
    attendees: 24,
    type: "Cultural Event",
    description: "Traditional Onam feast and cultural performances with the TravelExp community"
  },
  {
    id: 2,
    title: "Community Cooking Night",
    date: "Dec 28, 2024", 
    time: "7:00 PM",
    attendees: 12,
    type: "Workshop",
    description: "Learn to cook authentic Kerala dishes together"
  },
  {
    id: 3,
    title: "Surf Classes at Varkala",
    date: "Jan 2, 2025",
    time: "7:00 AM",
    attendees: 8,
    type: "Adventure",
    description: "Beginner-friendly surf lessons on Varkala's golden beaches"
  }
];

const coTravelers = [
  { id: 1, name: "Sarah Chen", avatar: "", location: "Singapore", trips: 3 },
  { id: 2, name: "Marco Silva", avatar: "", location: "Brazil", trips: 5 },
  { id: 3, name: "Aisha Patel", avatar: "", location: "Mumbai", trips: 2 },
  { id: 4, name: "James Wilson", avatar: "", location: "London", trips: 4 },
  { id: 5, name: "Maria Garcia", avatar: "", location: "Spain", trips: 2 },
  { id: 6, name: "David Kim", avatar: "", location: "Seoul", trips: 3 }
];

const recentMessages = [
  {
    id: 1,
    sender: "Sarah Chen",
    message: "Can't wait for the Onam celebration! 🎉",
    time: "2h ago",
    avatar: ""
  },
  {
    id: 2,
    sender: "Marco Silva", 
    message: "The surf classes were amazing yesterday!",
    time: "5h ago",
    avatar: ""
  },
  {
    id: 3,
    sender: "TravelExp Team",
    message: "New hidden gem discovered in Wayanad 🏔️",
    time: "1d ago",
    avatar: ""
  }
];

export const Community = () => {
  const [activeTab, setActiveTab] = useState("Events");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="p-4 pt-12 bg-white sticky top-0 z-10 border-b">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold">Community</h1>
            <p className="text-muted-foreground">Connect with fellow Kerala explorers</p>
          </div>
          <div className="flex gap-2">
            <Button size="icon" variant="ghost">
              <Camera className="w-5 h-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <MessageCircle className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <p className="text-xl font-bold gradient-text">2.4K</p>
            <p className="text-xs text-muted-foreground">Members</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold gradient-text">156</p>
            <p className="text-xs text-muted-foreground">Active Today</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold gradient-text">42</p>
            <p className="text-xs text-muted-foreground">Events This Month</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-muted p-1 rounded-lg">
          {["Events", "Travelers", "Messages"].map((tab) => (
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
        {activeTab === "Events" && (
          <div className="space-y-4">
            <h3 className="font-semibold">Upcoming Community Events</h3>
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{event.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date} • {event.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees} attending</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {event.description}
                    </p>
                  </div>
                  <Badge variant="secondary">{event.type}</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    Join Event
                  </Button>
                  <Button size="sm" variant="outline">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "Travelers" && (
          <div className="space-y-4">
            <h3 className="font-semibold">Co-Travelers</h3>
            <div className="grid grid-cols-2 gap-3">
              {coTravelers.map((traveler) => (
                <Card key={traveler.id} className="p-3">
                  <div className="flex items-center gap-3 mb-2">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={traveler.avatar} />
                      <AvatarFallback>
                        {traveler.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{traveler.name}</p>
                      <p className="text-xs text-muted-foreground">{traveler.location}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">
                      {traveler.trips} trips
                    </span>
                    <Button size="sm" variant="outline" className="h-6 px-2 text-xs">
                      Connect
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Messages" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">Community Chat</h3>
              <Button size="sm">New Message</Button>
            </div>
            <div className="space-y-3">
              {recentMessages.map((message) => (
                <Card key={message.id} className="p-3">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={message.avatar} />
                      <AvatarFallback>
                        {message.sender.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <p className="font-medium text-sm">{message.sender}</p>
                        <span className="text-xs text-muted-foreground">{message.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{message.message}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};