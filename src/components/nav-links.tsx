import { useState } from "react";
import { NavLink } from "./nav-link";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaX,
} from "react-icons/fa6";
import { IoSearchOutline, IoMenu } from "react-icons/io5";

export const NavLinks = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    const body = document.getElementById("body-stranger");
    body?.classList.toggle("overflow-hidden");

    // Estou convertendo o valor booleano
    setShowMenu((prev) => !prev);
  };

  return (
    <div>
      {/* NavLinks - Desktop */}
      <div className="hidden md:flex gap-6 items-center">
        {/* Links */}

        <div className="flex gap-6">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Articles</NavLink>
          <NavLink href="#">Contact Us</NavLink>
        </div>

        {/*separator*/}

        <div className="h-8 border-l border-zinc-400" />

        {/* Sociais */}
        <div className="flex gap-6">
          <a href="">
            <FaFacebook className="size-5 hover:text-red-500" />
          </a>
          <a href="">
            <FaTwitter className="size-5 hover:text-red-500" />
          </a>
          <a href="">
            <FaYoutube className="size-5 hover:text-red-500" />
          </a>
          <a href="">
            <FaPinterest className="size-5 hover:text-red-500" />
          </a>
        </div>

        {/*separator*/}

        <div className="h-8 border-l border-zinc-400" />

        <button>
          <IoSearchOutline className="size-5" />
        </button>
      </div>
      {/* NavLinks - Mobile */}
      <button className="block md:hidden" onClick={handleToggleMenu}>
        {showMenu ? (
          <FaX className="size-6 hover:text-red-500" />
        ) : (
          <IoMenu className="size-8 hover:text-red-500" />
        )}
      </button>
      {showMenu && (
        <div className="fixed inset-0 z-10 mt-20 flex">
          {/* Scape */}
          <div className="flex-1 bg-black/60" onClick={handleToggleMenu}></div>

          {/*Menu*/}
          <div className="w-full sm:w-80 bg-[#f8f9fa] flex flex-col justify-between py-6 px-4">
            {/* links */}
            <div className="flex flex-col items-center">
            <div className="text-black mb-4 flex items-center p-1 w-full bg-zinc-100 border">
              <button>
                <IoSearchOutline className="size-5" />
              </button>
              <input type="search" className="p-1 outline-none bg-transparent text-lg flex-1" 
              placeholder="Search"/>
            </div>
              <a
                href="#"
                className="text-black font-semibold text-2xl p-2 border-b w-full text-center hover:bg-zinc-100"
              >
                Home
              </a>
              <a
                href="#"
                className="text-black font-semibold text-2xl py-6 p-2 border-b w-full text-center hover:bg-zinc-100"
              >
                About
              </a>
              <a
                href="#"
                className="text-black font-semibold text-2xl py-6 p-2 border-b w-full text-center hover:bg-zinc-100"
              >
                Articles
              </a>
              <a
                href="#"
                className="text-black font-semibold text-2xl py-6 p-2 border-b w-full text-center hover:bg-zinc-100"
              >
                Contact Us
              </a>
            </div>
           
            {/* sociais */}
            <div className="flex gap-6 text-black justify-center">
              <a href="">
                <FaFacebook className="size-7 hover:text-red-500" />
              </a>
              <a href="">
                <FaTwitter className="size-7 hover:text-red-500" />
              </a>
              <a href="">
                <FaYoutube className="size-7 hover:text-red-500" />
              </a>
              <a href="">
                <FaPinterest className="size-7 hover:text-red-500" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
