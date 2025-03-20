import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCreateBookingMutation, useGetHotelByIdQuery } from "@/lib/api";
import {
    Coffee,
    MapPin,
    MenuIcon as Restaurant,
    Star,
    Tv,
    Wifi,
    Calendar as CalendarIcon,
} from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router";
import { Skeleton } from "@/components/ui/skeleton";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from "@/components/ui/dialog";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format, addDays } from "date-fns";
import { toast } from "sonner";

export default function HotelPage() {
    const { id } = useParams();
    const { data: hotel, isLoading, isError, error } = useGetHotelByIdQuery(id);
    const [createBooking, { isLoading: isCreateBookingLoading }] = useCreateBookingMutation();

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [checkInDate, setCheckInDate] = useState(new Date());
    const [checkOutDate, setCheckOutDate] = useState(addDays(new Date(), 1));
    const [roomNumber, setRoomNumber] = useState(201);

    const [isCheckInCalendarOpen, setIsCheckInCalendarOpen] = useState(false);
    const [isCheckOutCalendarOpen, setIsCheckOutCalendarOpen] = useState(false);

    const handleBookingClick = () => {
        setIsDialogOpen(true);
    };

    const handleConfirmBooking = async () => {
        try {
            toast.loading("Booking hotel...");
            await createBooking({
                hotelId: id,
                checkIn: checkInDate,
                checkOut: checkOutDate,
                roomNumber: roomNumber
            }).unwrap();
            setIsDialogOpen(false);
            toast.dismiss();
            toast.success("Hotel booked successfully");
        } catch (error) {
            toast.dismiss();
            toast.error("Hotel booking failed");
        }
    };

    const handleCheckInClick = () => {
        setIsCheckInCalendarOpen(true);
    };

    const handleCheckOutClick = () => {
        setIsCheckOutCalendarOpen(true);
    };

    if (isLoading)
        return (
            <div className="container mx-auto px-4 py-8 min-h-screen">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <Skeleton className="w-full h-[400px] rounded-lg" />
                        <div className="flex space-x-2">
                            <Skeleton className="h-6 w-24" />
                            <Skeleton className="h-6 w-32" />
                            <Skeleton className="h-6 w-28" />
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <Skeleton className="h-8 w-64 mb-2" />
                                <Skeleton className="h-4 w-48" />
                            </div>
                            <Skeleton className="h-10 w-10 rounded-full" />
                        </div>
                        <Skeleton className="h-4 w-36" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                        </div>
                        <Card>
                            <CardContent className="p-4">
                                <Skeleton className="h-6 w-32 mb-4" />
                                <div className="grid grid-cols-2 gap-4">
                                    {[...Array(4)].map((_, index) => (
                                        <div key={index} className="flex items-center">
                                            <Skeleton className="h-5 w-5 mr-2" />
                                            <Skeleton className="h-4 w-24" />
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                        <div className="flex items-center justify-between">
                            <div>
                                <Skeleton className="h-8 w-24 mb-1" />
                                <Skeleton className="h-4 w-16" />
                            </div>
                            <Skeleton className="h-12 w-32" />
                        </div>
                    </div>
                </div>
            </div>
        );

    if (isError) return <p className="text-red">Error: {error?.message}</p>;

    const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    const totalPrice = hotel.price * nights;

    return (
        <div className="container mx-auto px-4 py-8 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px]">
                        <img
                            src={hotel.image}
                            alt={hotel.name}
                            className="absolute w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Rooftop View</Badge>
                        <Badge variant="secondary">French Cuisine</Badge>
                        <Badge variant="secondary">City Center</Badge>
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-3xl font-bold">{hotel.name}</h1>
                            <div className="flex items-center mt-2">
                                <MapPin className="h-5 w-5 text-muted-foreground mr-1" />
                                <p className="text-muted-foreground">{hotel.location}</p>
                            </div>
                        </div>
                        <Button variant="outline" size="icon">
                            <Star className="h-4 w-4" />
                            <span className="sr-only">Add to favorites</span>
                        </Button>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Star className="h-5 w-5 fill-primary text-primary" />
                        <span className="font-bold">{hotel?.rating ?? "No Ratings"}</span>
                        <span className="text-muted-foreground">
                            ({hotel.reviews?.toLocaleString() ?? "No"} Reviews)
                        </span>
                    </div>
                    <p className="text-muted-foreground">{hotel.description}</p>
                    <Card>
                        <CardContent className="p-4">
                            <h2 className="text-xl font-semibold mb-4">Amenities</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center">
                                    <Wifi className="h-5 w-5 mr-2" />
                                    <span>Free Wi-Fi</span>
                                </div>
                                <div className="flex items-center">
                                    <Restaurant className="h-5 w-5 mr-2" />
                                    <span>Restaurant</span>
                                </div>
                                <div className="flex items-center">
                                    <Tv className="h-5 w-5 mr-2" />
                                    <span>Flat-screen TV</span>
                                </div>
                                <div className="flex items-center">
                                    <Coffee className="h-5 w-5 mr-2" />
                                    <span>Coffee maker</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-2xl font-bold">${hotel.price}</p>
                            <p className="text-sm text-muted-foreground">per night</p>
                        </div>
                        <Button size="lg" onClick={handleBookingClick}>Book Now</Button>
                    </div>
                </div>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Book Your Stay</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="check-in" className="text-sm font-medium">
                                    Check-in
                                </label>
                                <Button
                                    id="check-in"
                                    variant="outline"
                                    className="w-full justify-start text-left font-normal"
                                    onClick={handleCheckInClick}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {checkInDate ? format(checkInDate, "PPP") : "Select date"}
                                </Button>
                            </div>

                            <div className="flex flex-col space-y-2">
                                <label htmlFor="check-out" className="text-sm font-medium">
                                    Check-out
                                </label>
                                <Button
                                    id="check-out"
                                    variant="outline"
                                    className="w-full justify-start text-left font-normal"
                                    onClick={handleCheckOutClick}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {checkOutDate ? format(checkOutDate, "PPP") : "Select date"}
                                </Button>
                            </div>
                        </div>

                        <div className="mt-4 space-y-2">
                            <h3 className="font-medium">Stay Summary</h3>
                            <div className="text-sm">
                                <div className="flex justify-between">
                                    <span>Price per night:</span>
                                    <span>${hotel.price}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Nights:</span>
                                    <span>{nights}</span>
                                </div>
                                <div className="flex justify-between font-medium mt-2 pt-2 border-t">
                                    <span>Total:</span>
                                    <span>${totalPrice}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            onClick={handleConfirmBooking}
                            disabled={isCreateBookingLoading}
                        >
                            {isCreateBookingLoading ? "Booking..." : "Confirm Booking"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <Dialog open={isCheckInCalendarOpen} onOpenChange={setIsCheckInCalendarOpen}>
                <DialogContent className="sm:max-w-[350px] p-0">
                    <DialogHeader className="p-4 pb-0">
                        <DialogTitle>Select Check-in Date</DialogTitle>
                    </DialogHeader>
                    <div className="p-4">
                        <CalendarComponent
                            mode="single"
                            selected={checkInDate}
                            onSelect={(date) => {
                                if (date) {
                                    setCheckInDate(date);
                                    setIsCheckInCalendarOpen(false);

                                    if (date >= checkOutDate) {
                                        setCheckOutDate(addDays(date, 1));
                                    }
                                }
                            }}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            className="rounded-md border"
                        />
                    </div>
                    <DialogFooter className="px-4 pb-4">
                        <Button onClick={() => setIsCheckInCalendarOpen(false)}>Done</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <Dialog open={isCheckOutCalendarOpen} onOpenChange={setIsCheckOutCalendarOpen}>
                <DialogContent className="sm:max-w-[350px] p-0">
                    <DialogHeader className="p-4 pb-0">
                        <DialogTitle>Select Check-out Date</DialogTitle>
                    </DialogHeader>
                    <div className="p-4">
                        <CalendarComponent
                            mode="single"
                            selected={checkOutDate}
                            onSelect={(date) => {
                                if (date) {
                                    setCheckOutDate(date);
                                    setIsCheckOutCalendarOpen(false);
                                }
                            }}
                            disabled={(date) => date <= checkInDate || date < new Date()}
                            initialFocus
                            className="rounded-md border"
                        />
                    </div>
                    <DialogFooter className="px-4 pb-4">
                        <Button onClick={() => setIsCheckOutCalendarOpen(false)}>Done</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
