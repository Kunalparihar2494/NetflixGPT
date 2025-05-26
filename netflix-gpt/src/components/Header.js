import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="absolute z-10">
      <img src={logo} alt="logo" className="w-52 ml-[20rem] mt-8 bg-gradient-to-t from-black" />
    </div>
  );
};

export default Header;
