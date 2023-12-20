import React from "react";
import { Link } from "react-router-dom";
import PropertyNavbar from "../properties/components/PropertyNavbar";
import 'bootstrap/dist/css/bootstrap.min.css'

const Profile = () => {
    return (
        <div>
            <PropertyNavbar />
            <div className="container  text-center" >
                <div>
                    <h2><b>My Profile</b></h2>
                </div>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/images/icon_png.png`} width="40px" height="40px" />
                </div>
                <div>
                    <p><b>User ID</b></p>
                    <p>The_don</p>
                </div>
                <div>
                    <p><b>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#"><b>Edit</b></a></b></p>
                    <p>Donpaul Oduor</p>
                </div>
                <div>
                    <p><b>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#"><b>Edit</b></a></b></p>
                    <p>example@gmail.com</p>
                </div>
                <div>
                    <p><b>Change Password</b></p>
                </div>
                <div>
                    <p><a href="#"><b>Logout</b></a></p>
                </div>
            </div>
        </div>
    )
};

export default Profile;