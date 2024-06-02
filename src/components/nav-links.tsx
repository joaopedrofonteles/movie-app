import { useState } from "react";
import {
  FaX,
} from "react-icons/fa6";
import { IoSearchOutline, IoMenu } from "react-icons/io5";

// utilites
import { links } from "../data/links";
import { socialLinks } from "../data/social-links"; 

// Components

import { NavLink } from "./nav-link";
import { SearchInput } from "./search-input";
import { MobileLink } from "./mobile-link";

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
          {links.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/*separator*/}

        <div className="h-8 border-l border-zinc-400" />

        {/* Sociais */}
        <div className="flex gap-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a href={link.href}>
                <Icon className="size-5 hover:text-red-500" />
              </a>
            );
          })}
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
          <div className="flex-1 bg-black/60" onClick={handleToggleMenu} />

          {/*Menu*/}
          <div className="w-full sm:w-80 bg-[#f8f9fa] flex flex-col justify-between py-6 px-4">
            {/* links */}
            <div className="flex flex-col items-center">
             <SearchInput />
              {links.map((link) => (
                <MobileLink key={link.label}link={link}/> 
              ))}
            </div>

            {/* sociais */}
            <div className="flex gap-6 text-black justify-center">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a key={link.label} href={link.href}>
                    <Icon className="size-7 hover:text-red-500" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
