import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DestinationCard } from "@/components/DestinationCard";
import { useQuery } from "@tanstack/react-query";
import { Search as SearchIcon, RefreshCw } from "lucide-react";

interface Destination {
  title: string;
  description: string;
  flight_price: string;
  flight_duration: string;
  thumbnail: string;
  link: string;
}

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: destinations = [], isLoading, error, refetch } = useQuery({
    queryKey: ["destinations"],
    queryFn: async () => {
      console.log("Fetching destinations...");
      const response = await fetch("http://localhost:8000/destination");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Fetched destinations:", data);
      return data;
    },
  });

  const filteredDestinations = destinations.filter((dest: Destination) =>
    dest.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-neutral p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Find Your Dream Destination
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Search through our curated collection of destinations. Each location comes with detailed information about flights, 
            duration, and local attractions to help you make the perfect choice.
          </p>
          
          <div className="flex gap-4 max-w-md mx-auto mb-8">
            <Input
              type="text"
              placeholder="Search destinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <Button 
              onClick={() => refetch()} 
              variant="secondary"
              className="flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </Button>
          </div>
        </div>

        {isLoading && (
          <div className="text-center text-gray-600">
            <RefreshCw className="animate-spin h-8 w-8 mx-auto mb-4" />
            Loading destinations...
          </div>
        )}

        {error && (
          <div className="text-center text-red-600">
            Error loading destinations. Please try again later.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((destination: Destination, index: number) => (
            <DestinationCard key={index} destination={destination} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;