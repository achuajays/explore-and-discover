import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Compass, Heart, Map } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl font-bold text-primary mb-6">
          Discover Your Perfect Vacation Spot
        </h1>
        
        <div className="space-y-6 text-gray-600">
          <p className="text-xl mb-8">
            Find your ideal destination based on your feelings and preferences. Our intelligent travel companion helps you discover amazing places that match your mood and desires.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <Heart className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Personalized Matches</h3>
              <p className="text-sm">Destinations that resonate with your feelings</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <Compass className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Smart Discovery</h3>
              <p className="text-sm">Find hidden gems and popular attractions</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <Map className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Complete Details</h3>
              <p className="text-sm">Flight prices, durations, and local highlights</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => navigate("/search")}
            className="bg-secondary hover:bg-secondary-dark text-white px-8 py-6 text-lg rounded-lg transition-colors flex items-center gap-2"
          >
            Start Exploring <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;