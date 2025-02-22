import HotelCard from "./HotelCard";
import LocationTab from "./LocationTab";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { getHotels } from "@/lib/api/hotels";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react";



export default function HotelListings() {

  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const locations = ["ALL", "France", "Italy", "Australia", "Japan"]

  const [selectedLocation, setSelectedLocation] = useState("ALL");

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
  }

  const filteredHotels = selectedLocation === "ALL" ? hotels : hotels.filter((hotel) => {
    return hotel.location.toLowerCase().includes(selectedLocation.toLowerCase());
  })

  useEffect(() => {
    getHotels().then((hotels) => {
      setHotels(hotels);
    }).catch((error) => {
      setIsError(true);
      setError(error.message);
    }).finally(() => {
      setIsLoading(false);
    })
  }, [])

  if (isLoading) {
    return (
      <section className="px-5 py-6 lg:py-16 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Top trending hotels worldwide
          </h2>

          <p className="text-lg text-muted-foreground">
            Discover the most trending hotels worldwide for an unforgettable
            experience.
          </p>
        </div>

        <div className="flex items-center gap-x-2">
          {
            locations.map((location, i) => {
              return (<LocationTab key={i} selectedLocation={selectedLocation} name={location} onClick={handleSelectLocation} />)
            })
          }
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4 cursor-pointer">
          <p>Loading...</p>
        </div>

      </section>
    );
  }

  if (isError) {
    return (
      <section className="px-5 py-6 lg:py-16 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Top trending hotels worldwide
          </h2>

          <p className="text-lg text-muted-foreground">
            Discover the most trending hotels worldwide for an unforgettable
            experience.
          </p>
        </div>

        <div className="flex items-center gap-x-2 mb-4">
          {
            locations.map((location, i) => {
              return (<LocationTab key={i} selectedLocation={selectedLocation} name={location} onClick={handleSelectLocation} />)
            })
          }
        </div>

        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Error while fetching data...
          </AlertDescription>
        </Alert>

      </section>
    );
  }

  return (
    <section className="px-5 py-6 lg:py-16 lg:px-8">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Top trending hotels worldwide
        </h2>

        <p className="text-lg text-muted-foreground">
          Discover the most trending hotels worldwide for an unforgettable
          experience.
        </p>
      </div>

      <div className="flex items-center gap-x-2">
        {
          locations.map((location, i) => {
            return (<LocationTab key={i} selectedLocation={selectedLocation} name={location} onClick={handleSelectLocation} />)
          })
        }
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4 cursor-pointer">
        {
          filteredHotels.map((hotel) => {
            return (<HotelCard key={hotel._id} hotel={hotel} />)
          })
        }
      </div>
    </section>
  );
}
