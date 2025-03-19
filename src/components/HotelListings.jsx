import HotelCard from "./HotelCard";
import LocationTab from "./LocationTab";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react";
import { useGetHotelsQuery } from "@/lib/api";



export default function HotelListings() {

  const { data: hotels, isLoading, isError, error } = useGetHotelsQuery();

  const locations = ["ALL", "France", "Italy", "Australia", "Japan"]

  const [selectedLocation, setSelectedLocation] = useState("ALL");

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
  }

  const filteredHotels = selectedLocation === "ALL" ? hotels : hotels.filter((hotel) => {
    return hotel.location.toLowerCase().includes(selectedLocation.toLowerCase());
  })



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
          {/* {
            locations.map((location, i) => {
              return (<LocationTab key={i} selectedLocation={selectedLocation} name={location} onClick={handleSelectLocation} />)
            })
          } */}
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
