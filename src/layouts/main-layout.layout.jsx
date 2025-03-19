import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Outlet } from "react-router";


const MainLayout = () => {
    return (
        <>
            <Navigation />
            <Outlet />
            <Footer/>
        </>
    );
};

export default MainLayout;