import React from "react";
import logo from "../assets/logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        alert("User Signed Out");
        navigate(`/`);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="absolute w-screen z-10 bg-gradient-to-b from-black flex justify-between">
      <img src={logo} alt="logo" className="w-52 ml-[20rem] mt-8" />
      {user && (
        <div className="m-10 flex">
          <img
            className="w-12 h-12"
            src="https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
            alt="profile"
          />
          <button onClick={handleSignOut} className="font-bold text-white m-3">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
