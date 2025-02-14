import Navigation from "@/components/Navigation";
import { Outlet } from "react-router";


const RootLayout = () => {
    return (
        <>
            <Outlet />
        </>
    );
};

export default RootLayout;