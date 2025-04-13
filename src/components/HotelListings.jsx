import { useGetHotelsForSearchQueryQuery } from "@/lib/api";
import HotelCard from "./HotelCard";
import LocationTab from "./LocationTab";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import { useSelector } from "react-redux";

export default function HotelListings() {
  const searchValue = useSelector((state) => state.search.value);

  const {
    data: hotels,
    isLoading,
    isError,
    error,
    isFetching
  } = useGetHotelsForSearchQueryQuery({
    query: searchValue,
  });

  const locations = ["ALL", "France", "Italy", "Australia", "Japan"]

  const [selectedLocation, setSelectedLocation] = useState("ALL");

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
  }

  if (isLoading || isFetching) {
    return (
      <section className="px-5 py-6 lg:py-16 lg:px-8">
        <div id="hotel-listings" className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Top Trending Hotels Worldwide
          </h2>

          <p className="text-lg text-muted-foreground">
           Discover the most trending hotels for an unforgettable experience
          </p>
        </div>

        <div className="flex items-center gap-x-2 mb-4">
          {locations.map((location, i) => (
            <LocationTab
              key={i}
              selectedLocation={selectedLocation}
              name={location}
              onClick={handleSelectLocation}
            />
          ))}
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden">
                <Skeleton className="aspect-[4/3] rounded-t-xl bg-gray-300/70" />
                <div className="p-6 pt-0 mt-3 space-y-2">
                  <Skeleton className="h-6 w-3/4 bg-gray-300/70" />
                  <Skeleton className="h-4 w-1/2 bg-gray-300/70" />
                  <Skeleton className="h-4 w-1/3 bg-gray-300/70" />
                </div>
                <div className="flex items-center p-6 pt-0">
                  <Skeleton className="h-6 w-1/4 bg-gray-300/70" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="px-5 py-6 lg:py-16 lg:px-8">
        <div id="hotel-listings" className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Oops! Something went wrong
          </h2>

          <p className="text-lg text-muted-foreground">
            We couldn't load hotels
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

  const filteredHotels = selectedLocation === "ALL"
    ? hotels
    : hotels.filter(({ hotel }) => {
        return hotel.location.toLowerCase().includes(selectedLocation.toLowerCase());
      });

  return (
    <section className="px-5 py-6 lg:py-16 lg:px-8">
      <div className="mb-12">
        <h2 id="hotel-listings" className="text-3xl md:text-4xl font-bold mb-4">
          Top Trending Hotels Worldwide
        </h2>

        <p className="text-lg text-muted-foreground">
          Discover the most trending hotels for an unforgettable experience
        </p>
      </div>

      <div className="flex items-center gap-x-2 mb-4">
        {locations.map((location, i) => (
          <LocationTab
            key={i}
            selectedLocation={selectedLocation}
            name={location}
            onClick={handleSelectLocation}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4 cursor-pointer">
        {filteredHotels.map(({ hotel, confidence }) => (
          <HotelCard
            key={hotel._id}
            hotel={hotel}
            confidence={confidence}
            isFromSearch={searchValue.trim() !== ""}
          />
        ))}
      </div>
    </section>
  );
}