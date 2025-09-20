import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ExperienceDetail } from "./pages/ExperienceDetail";
import { BookingFlow } from "./pages/BookingFlow";
import { Explore } from "./pages/Explore";
import { Trips } from "./pages/Trips";
import { Community } from "./pages/Community";
import { Profile } from "./pages/Profile";
import { Welcome } from "./pages/Welcome";
import { AppLayout } from "./components/AppLayout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/" element={
            <AppLayout>
              <Home />
            </AppLayout>
          } />
          <Route path="/explore" element={
            <AppLayout>
              <Explore />
            </AppLayout>
          } />
          <Route path="/trips" element={
            <AppLayout>
              <Trips />
            </AppLayout>
          } />
          <Route path="/community" element={
            <AppLayout>
              <Community />
            </AppLayout>
          } />
          <Route path="/profile" element={
            <AppLayout>
              <Profile />
            </AppLayout>
          } />
          <Route path="/experience/:id" element={
            <AppLayout>
              <ExperienceDetail />
            </AppLayout>
          } />
          <Route path="/booking" element={
            <AppLayout>
              <BookingFlow />
            </AppLayout>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
