import React from "react";
import logo from "../assets/logo.png";


const Navbar = () => {
    return (
        <div className="flex justify-center p-4 bg-gradient-to-r from-[#a2b7a2] to-[#D0FFD2]">
            <img src={logo} alt="logo" className="h-12 w-34" />
        </div>
    );
}

export default Navbar;