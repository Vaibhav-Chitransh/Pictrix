import React, { useState } from "react";
import logoIcon from "../assets/apple-touch-icon.png";
import logoName from "../assets/logo_name.png";
import userIcon from '../assets/default_image.avif';
import coin from '../assets/coin.jpg';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [user, setUser] = useState(true);
    const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center justify-between">
        <Link to="/">
          <div className="flex items-center">
            <img src={logoIcon} alt="logo" className="w-8 sm:w-14" />
            <img src={logoName} alt="logo" className="w-24 sm:w-36 mix-blend-multiply" />
          </div>
        </Link>
        <div>
          {
            user ?
            <div className="flex items-center gap-4 sm:gap-6">
                <button className="flex gap-1 items-center bg-blue-100 px-3 sm:px-4 py-2 rounded-full hover:scale-105 hover:bg-blue-200 transition-all">
                    <img src={coin} alt="coin" className="w-5 mix-blend-multiply" />
                    <p className="text-2xl">50</p>
                </button>
                <div>
                    <img src={userIcon} alt="user" className="w-14 mix-blend-multiply cursor-pointer hover:scale-110 transition-all " />
                </div>
            </div>
            :
            <div className="flex items-center gap-4 sm:gap-8">
                <p className="cursor-pointer" onClick={() => navigate('/buy')}>Pricing</p>
                <button className="cursor-pointer bg-zinc-800 text-white px-6 sm:px-10 py-2 rounded-full text-sm ">Login</button>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
