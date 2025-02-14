import Navigation from "@/components/Navigation";
import { Outlet } from "react-router";


const MainLayout = () => {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    );
};

export default MainLayout;