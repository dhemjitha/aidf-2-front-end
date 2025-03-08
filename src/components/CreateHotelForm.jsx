import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"
import { useCreateHotelMutation } from "@/lib/api";
import { toast } from "sonner";

const formSchema = z.object({
    name: z.string().min(1, { message: "Hotel name is required" }),
    location: z.string().min(1),
    image: z.string().min(1),
    price: z.number(),
    description: z.string().min(1),
})

const CreateHotelForm = () => {

    const [createHotel, { isLoading }] = useCreateHotelMutation();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            location: "",
            image: "",
            price: "",
            description: "",
        },
    });

    const handleSubmit = async (values) => {
        const { name, location, image, price, description } = values;
        try {
            toast.loading("Creating hotel...");
            await createHotel({
                name,
                location,
                image,
                price,
                description,
            }).unwrap();
            toast.dismiss();
            toast.success("Hotel created successfully");
        } catch (error) {
            toast.dismiss();
            toast.error("Hotel creation failed");
        }
    }

    return (
        <Form {...form}>
            <form className="lg:w-1/2" onSubmit={form.handleSubmit(handleSubmit)}>
                <div>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Hotel Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Hotel Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Hotel Location</FormLabel>
                                <FormControl>
                                    <Input placeholder="Hotel Location" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Hotel Image</FormLabel>
                                <FormControl>
                                    <Input placeholder="Hotel Image" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Hotel Price</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="Hotel Price" onChange={(e) => {
                                        field.onChange(parseFloat(e.target.value));
                                    }} value={field.value} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Hotel Description</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Hotel Description" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                </div>

                <div className="mt-4">
                    <Button type="submit">Create Hotel</Button>
                </div>
            </form>
        </Form>
    )

}

export default CreateHotelForm;