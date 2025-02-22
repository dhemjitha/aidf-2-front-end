export const getHotels = async () => {
    try {
        const res = await fetch("http://localhost:8000/api/hotels", {
            method: "GET",
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};