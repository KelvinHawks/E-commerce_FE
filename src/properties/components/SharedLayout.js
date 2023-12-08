import { Outlet } from "react-router-dom";
import PropertyManager from "../../pages/PropertyManager";
import Footer from "./Foter";

const SharedLayout = () => {
    return (
        <>
            < PropertyManager />
            < Outlet />
            <Footer />
        </>
    );
};

export default SharedLayout;