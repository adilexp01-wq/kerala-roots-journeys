import { useState } from "react";
import { Edit, Settings, Heart, CreditCard, Bell, LogOut, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import ayurvedaImage from "@/assets/ayurveda-experience.jpg";
import hillsImage from "@/assets/hills-spice.jpg";

const tabs = ["My Trips", "Saved", "Payments", "Settings"];

const myTrips = [
  {
    id: 1,
    title: "Backwaters & Ayurveda",
    image: ayurvedaImage,
    status: "upcoming",
    date: "Dec 15, 2024"
  },
  {
    id: 2,
    title: "Local Living in Varkala", 
    image: hillsImage,
    status: "completed",
    date: "Nov 2, 2024"
  }
];

const savedExperiences = [
  {
    id: 1,
    title: "Hills & Spice Trails",
    image: hillsImage,
    price: "₹15,800"
  },
  {
    id: 2,
    title: "Traditional Fishing Experience",
    image: ayurvedaImage,
    price: "₹7,200"
  }
];

const payments = [
  {
    id: 1,
    description: "Backwaters & Ayurveda Experience",
    amount: "₹25,000",
    date: "Dec 1, 2024",
    status: "paid"
  },
  {
    id: 2,
    description: "Local Living in Varkala",
    amount: "₹16,400", 
    date: "Oct 28, 2024",
    status: "paid"
  }
];

const settingsItems = [
  { icon: Bell, label: "Notifications", hasNotification: true },
  { icon: CreditCard, label: "Payment Methods" },
  { icon: Settings, label: "App Settings" },
  { icon: Heart, label: "Privacy Policy" },
  { icon: LogOut, label: "Sign Out", danger: true }
];

export const Profile = () => {
  const [activeTab, setActiveTab] = useState("My Trips");

  const getTabContent = () => {
    switch (activeTab) {
      case "My Trips":
        return (
          <div className="space-y-3">
            {myTrips.map((trip) => (
              <Card key={trip.id} className="overflow-hidden">
                <div className="flex">
                  <img 
                    src={trip.image} 
                    alt={trip.title}
                    className="w-20 h-20 object-cover"
                  />
                  <div className="flex-1 p-3">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-sm">{trip.title}</h4>
                      <Badge 
                        variant={trip.status === "upcoming" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {trip.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{trip.date}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        );
      
      case "Saved":
        return (
          <div className="space-y-3">
            {savedExperiences.map((experience) => (
              <Card key={experience.id} className="overflow-hidden">
                <div className="flex">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-20 h-20 object-cover"
                  />
                  <div className="flex-1 p-3">
                    <h4 className="font-medium text-sm mb-1">{experience.title}</h4>
                    <p className="text-sm font-semibold gradient-text">{experience.price}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        );
      
      case "Payments":
        return (
          <div className="space-y-3">
            {payments.map((payment) => (
              <Card key={payment.id} className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-sm">{payment.description}</h4>
                  <Badge variant="secondary" className="text-xs">
                    {payment.status}
                  </Badge>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">{payment.date}</span>
                  <span className="font-semibold">{payment.amount}</span>
                </div>
              </Card>
            ))}
          </div>
        );
      
      case "Settings":
        return (
          <div className="space-y-2">
            {settingsItems.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.label} className="p-0">
                  <button 
                    className={`w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors ${
                      item.danger ? 'text-destructive' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                      {item.hasNotification && (
                        <div className="w-2 h-2 bg-destructive rounded-full" />
                      )}
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </Card>
              );
            })}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="p-4 pt-12 bg-white border-b">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Profile</h1>
          <Button size="icon" variant="ghost">
            <Edit className="w-5 h-5" />
          </Button>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-4 mb-6">
          <Avatar className="w-16 h-16">
            <AvatarImage src="" />
            <AvatarFallback className="text-lg font-semibold">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="text-muted-foreground">john.doe@email.com</p>
            <div className="flex gap-4 mt-2 text-sm">
              <span><strong>3</strong> trips</span>
              <span><strong>15</strong> experiences</span>
              <span><strong>4.8</strong> rating</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-muted p-1 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-2 rounded-md text-xs font-medium transition-colors ${
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

      {/* Content */}
      <div className="p-4">
        {getTabContent()}
      </div>
    </div>
  );
};