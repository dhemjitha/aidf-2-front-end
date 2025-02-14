import HotelCard from "./HotelCard";
import LocationTab from "./LocationTab";
import { useState } from "react";
import { Button } from "./ui/button";
import { getHotels } from "@/lib/api/hotels";



export default function HotelListings() {

  const [hotels, setHotels] = useState([]);

  const locations = ["ALL", "France", "Italy", "Australia", "Japan"]

  const [selectedLocation, setSelectedLocation] = useState("ALL");

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
  }

  const filteredHotels = selectedLocation === "ALL" ? hotels : hotels.filter((hotel) => {
    return hotel.location.toLowerCase().includes(selectedLocation.toLowerCase());
  })

  return (
    <section className="px-5 py-6 lg:py-16 lg:px-8">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Top trending hotels worldwide
        </h2>

        <Button onClick={async () => {
          const hotels = await getHotels();
          setHotels(hotels);
        }}>Fetch Data</Button>


        <p className="text-lg text-muted-foreground">
          Discover the most trending hotels worldwide for an unforgettable
          experience.
        </p>
      </div>

      <div className="flex items-center gap-x-2">
        {
          locations.map((location) => {
            return (<LocationTab selectedLocation={selectedLocation} name={location} onClick={handleSelectLocation} />)
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
