import { useState } from "react";
import { Input } from "@/components/ui/input";
import { DestinationCard } from "@/components/DestinationCard";
import { useQuery } from "@tanstack/react-query";

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

  const { data: destinations = [], isLoading, error } = useQuery({
    queryKey: ["destinations"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8000/destination");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  const filteredDestinations = destinations.filter((dest: Destination) =>
    dest.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-neutral p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-6">
            Search Destinations
          </h1>
          <Input
            type="text"
            placeholder="Search destinations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>

        {isLoading && (
          <div className="text-center text-gray-600">Loading destinations...</div>
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