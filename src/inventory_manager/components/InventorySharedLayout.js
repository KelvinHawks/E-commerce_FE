import React from "react";
import { Outlet } from "react-router-dom";
import InventoryNavbar from "./InventoryNavbar";
import Footer from "../../properties/components/Foter";
import 'bootstrap/dist/css/bootstrap.min.css';

const InventorySharedLayout = () => {
    return(
        <div>
            <div className="d-flex">
                <InventoryNavbar />
                <Outlet />
            </div>

            <div style={{margin:0}}>
                <Footer />
            </div>
            
        </div>
    );
};

export default InventorySharedLayout;