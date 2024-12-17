import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-bold text-primary mb-6">
          Discover Your Next Adventure
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Explore amazing destinations around the world with the best travel deals
        </p>
        <Button
          onClick={() => navigate("/search")}
          className="bg-secondary hover:bg-secondary-dark text-white px-8 py-6 text-lg rounded-lg transition-colors"
        >
          Start Exploring
        </Button>
      </div>
    </div>
  );
};

export default Index;