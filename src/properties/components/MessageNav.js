import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import GeneralNavbar from "./GeneralNavbar";
import { Link } from "react-router-dom";

const MessageNav = () => {
    
    return (
        <div>
            <GeneralNavbar />
            <div className="row text-center">
                <div className="col-md-6">
                    <b>Notifications</b>
                </div>
                <div className="col-md-6">
                    <Link to="/messages/chats" >
                        <b>chats</b>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default MessageNav;