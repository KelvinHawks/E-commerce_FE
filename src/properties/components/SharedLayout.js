import { Outlet } from "react-router-dom";
import PropertyManager from "../../pages/PropertyPage";
import PropertyNavbar from "./PropertyNavbar";
import Footer from "./Foter";

const SharedLayout = () => {
    return (
        <>
            {/*< PropertyManager />*/}
            <PropertyNavbar />
            < Outlet />
            <Footer />
        </>
    );
};

export default SharedLayout;