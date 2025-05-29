import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { PROILE } from "../utils/images";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate(`/browse`);
      } else {
        dispatch(removeUser());
        navigate(`/`);
      }
    });

    return () => unsubscribe(); 
  }, []);

  return (
    <div className="absolute w-screen z-10 bg-gradient-to-b from-black flex justify-between">
      <img src={logo} alt="logo" className="w-52 ml-[20rem] mt-8" />
      {user && (
        <div className="m-10 flex">
          <img
            className="w-12 h-12"
            src={PROILE}
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
