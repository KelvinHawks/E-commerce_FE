import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Outlet } from "react-router-dom";
import MessageNav from "./MessageNav";

const MessageSharedComponent = () => {
    
    return (
        <div>
            <MessageNav />
            <Outlet />
            
        </div>
    )
}

export default MessageSharedComponent;