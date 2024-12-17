import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Compass, Heart, Map, Star, Globe, Shield } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[600px] bg-gradient-to-r from-primary to-secondary-dark overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
          <h1 className="text-5xl font-bold mb-6 max-w-2xl">
            Find Your Perfect Vacation Spot
          </h1>
          <p className="text-xl mb-8 max-w-xl opacity-90">
            Discover destinations that match your mood and desires. Let our intelligent travel companion guide you to amazing places worldwide.
          </p>
          <Button 
            onClick={() => navigate("/search")}
            className="w-fit bg-white text-primary hover:bg-neutral-100 px-8 py-6 text-lg rounded-full transition-all transform hover:scale-105"
          >
            Start Exploring <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-neutral">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-primary">Why Choose Our Travel Companion?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Heart className="w-8 h-8 text-secondary" />}
              title="Personalized Matches"
              description="Get destination recommendations that perfectly align with your preferences and travel style."
            />
            <FeatureCard
              icon={<Compass className="w-8 h-8 text-secondary" />}
              title="Smart Discovery"
              description="Explore hidden gems and popular attractions tailored to your interests."
            />
            <FeatureCard
              icon={<Map className="w-8 h-8 text-secondary" />}
              title="Complete Details"
              description="Access comprehensive information about flights, accommodations, and local highlights."
            />
          </div>
        </div>
      </div>

      {/* Detailed Features */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-primary">Transform Your Travel Dreams into Reality</h2>
              <div className="space-y-6">
                <Feature
                  icon={<Star />}
                  title="Personalized Recommendations"
                  description="Tell us your travel style and preferences, we'll find your perfect match."
                />
                <Feature
                  icon={<Globe />}
                  title="Worldwide Destinations"
                  description="Explore curated destinations from across the globe."
                />
                <Feature
                  icon={<Shield />}
                  title="Secure Bookings"
                  description="Book with confidence through our trusted travel partners."
                />
              </div>
              <Button 
                onClick={() => navigate("/search")}
                className="mt-8 bg-secondary hover:bg-secondary-dark text-white"
              >
                Start Planning Now <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl" />
              <img 
                src="/lovable-uploads/2d26131c-35d4-4c0e-b9ed-497dadac1d0a.png" 
                alt="Travel App Interface" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-primary">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Feature = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="flex items-start gap-4">
    <div className="p-2 bg-secondary/10 rounded-lg">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-lg text-primary mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default Index;