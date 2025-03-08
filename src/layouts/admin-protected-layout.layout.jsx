import { useUser } from "@clerk/clerk-react";
import { Outlet } from "react-router";
import { Navigate } from "react-router";

const AdminProtectedLayout = () => {

    const { user } = useUser();

    if(user.publicMetadata?.role !== "admin"){
        return <Navigate to="/"/>
    }

    return (
        <Outlet />
    );
};

export default AdminProtectedLayout;