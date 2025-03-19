import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BACKEND_URL = "https://aidf-2-back-end-production.up.railway.app";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: `${BACKEND_URL}/api/`, prepareHeaders: async (headers, { getState }) => {
            const token = await window?.Clerk?.session?.getToken();
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
        }
    }),
    endpoints: (builder) => ({
        getHotels: builder.query({
            query: () => "hotels",
        }),
        getHotelById: builder.query({
            query: (id) => `hotels/${id}`,
        }),
        createHotel: builder.mutation({
            query: (hotel) => ({
                url: "hotels",
                method: "POST",
                body: hotel,
            }),
        }),
        createBooking: builder.mutation({
            query: (booking) => ({
                url: "bookings",
                method: "POST",
                body: booking,
            }),
        }),
    }),
});

export const { useGetHotelsQuery, useGetHotelByIdQuery, useCreateHotelMutation, useCreateBookingMutation } = api;