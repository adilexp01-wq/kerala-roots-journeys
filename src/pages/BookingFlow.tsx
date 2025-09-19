import { useState } from "react";
import { ArrowLeft, Calendar, Users, CreditCard, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type BookingStep = "date" | "travelers" | "payment" | "confirmation";

export const BookingFlow = () => {
  const [currentStep, setCurrentStep] = useState<BookingStep>("date");
  const [selectedDate, setSelectedDate] = useState("");
  const [travelerCount, setTravelerCount] = useState(2);

  const stepData = {
    date: { title: "Select Dates", icon: Calendar },
    travelers: { title: "Travelers", icon: Users },
    payment: { title: "Payment", icon: CreditCard },
    confirmation: { title: "Confirmed", icon: Check }
  };

  const steps: BookingStep[] = ["date", "travelers", "payment", "confirmation"];
  const currentStepIndex = steps.indexOf(currentStep);

  const nextStep = () => {
    const nextIndex = Math.min(currentStepIndex + 1, steps.length - 1);
    setCurrentStep(steps[nextIndex]);
  };

  const prevStep = () => {
    const prevIndex = Math.max(currentStepIndex - 1, 0);
    setCurrentStep(steps[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12 bg-white sticky top-0 z-10 border-b">
        <Button size="icon" variant="ghost" onClick={prevStep}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="font-semibold">{stepData[currentStep].title}</h1>
        <div className="w-10" /> {/* Spacer */}
      </div>

      {/* Progress Stepper */}
      <div className="p-4 bg-white border-b">
        <div className="flex justify-between items-center">
          {steps.map((step, index) => {
            const Icon = stepData[step].icon;
            const isActive = index === currentStepIndex;
            const isCompleted = index < currentStepIndex;
            
            return (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isCompleted
                      ? "bg-primary text-primary-foreground"
                      : isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-12 h-1 mx-2 ${
                      index < currentStepIndex ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1">
        {currentStep === "date" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">When do you want to travel?</h2>
              <p className="text-muted-foreground mb-6">Select your preferred dates for the experience</p>
            </div>
            
            <Card className="p-4">
              <Label htmlFor="start-date" className="text-sm font-medium">
                Start Date
              </Label>
              <Input
                id="start-date"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="mt-2"
              />
            </Card>

            <div className="bg-muted/50 p-4 rounded-xl">
              <h3 className="font-medium mb-2">Experience Summary</h3>
              <p className="text-sm text-muted-foreground mb-2">Backwaters & Ayurveda Experience</p>
              <div className="flex justify-between text-sm">
                <span>Duration: 5 days</span>
                <span className="font-semibold gradient-text">₹12,500 per person</span>
              </div>
            </div>
          </div>
        )}

        {currentStep === "travelers" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">How many travelers?</h2>
              <p className="text-muted-foreground mb-6">Let us know your group size</p>
            </div>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Adults</h3>
                  <p className="text-sm text-muted-foreground">Age 18+</p>
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => setTravelerCount(Math.max(1, travelerCount - 1))}
                  >
                    -
                  </Button>
                  <span className="text-lg font-semibold w-8 text-center">
                    {travelerCount}
                  </span>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => setTravelerCount(Math.min(8, travelerCount + 1))}
                  >
                    +
                  </Button>
                </div>
              </div>
            </Card>

            <div className="bg-muted/50 p-4 rounded-xl">
              <div className="flex justify-between items-center">
                <span>Total Cost ({travelerCount} {travelerCount === 1 ? 'person' : 'people'})</span>
                <span className="text-lg font-bold gradient-text">
                  ₹{(12500 * travelerCount).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        )}

        {currentStep === "payment" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Payment Details</h2>
              <p className="text-muted-foreground mb-6">Secure payment for your Kerala experience</p>
            </div>

            <Card className="p-4 space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Your full name" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="card">Card Number</Label>
                <Input id="card" placeholder="**** **** **** ****" className="mt-1" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry">Expiry</Label>
                  <Input id="expiry" placeholder="MM/YY" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="***" className="mt-1" />
                </div>
              </div>
            </Card>

            <div className="bg-muted/50 p-4 rounded-xl">
              <h3 className="font-medium mb-3">Booking Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Experience</span>
                  <span>Backwaters & Ayurveda</span>
                </div>
                <div className="flex justify-between">
                  <span>Travelers</span>
                  <span>{travelerCount} {travelerCount === 1 ? 'person' : 'people'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Date</span>
                  <span>{selectedDate || "Not selected"}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="gradient-text">₹{(12500 * travelerCount).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === "confirmation" && (
          <div className="text-center space-y-6 py-8">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
              <Check className="w-10 h-10 text-primary-foreground" />
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
              <p className="text-muted-foreground">
                Your Kerala adventure is all set. Check your email for details.
              </p>
            </div>

            <Card className="p-4 text-left">
              <h3 className="font-semibold mb-2">Booking Reference</h3>
              <p className="text-sm text-muted-foreground mb-4">#KE{Date.now().toString().slice(-6)}</p>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Experience</span>
                  <span>Backwaters & Ayurveda</span>
                </div>
                <div className="flex justify-between">
                  <span>Date</span>
                  <span>{selectedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span>Travelers</span>
                  <span>{travelerCount}</span>
                </div>
              </div>
            </Card>

            <div className="space-y-3">
              <Button className="w-full">
                Join WhatsApp Community
              </Button>
              <Button variant="outline" className="w-full">
                Join Discord Community
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      {currentStep !== "confirmation" && (
        <div className="sticky bottom-0 bg-white border-t p-4">
          <Button 
            className="w-full py-3 text-lg font-semibold"
            onClick={nextStep}
            disabled={currentStep === "date" && !selectedDate}
          >
            {currentStep === "payment" ? "Complete Booking" : "Continue"}
          </Button>
        </div>
      )}
    </div>
  );
};