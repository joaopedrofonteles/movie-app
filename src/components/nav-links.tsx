import { NavLink } from "./nav-link"
import { FaFacebook, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa6" 
import { IoSearchOutline } from "react-icons/io5";


export const NavLinks = () => {
    return (
   <div className="flex gap-6 items-center">
       <div className="flex gap-6 pr-6 border-r">
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Articles</NavLink>
        <NavLink href="#">Contact Us</NavLink>
       </div>
       <div className="flex gap-6">
        <a href=""><FaFacebook className="size-5 hover:text-red-500" /></a>
        <a href=""><FaTwitter className="size-5 hover:text-red-500" /></a>
        <a href=""><FaYoutube className="size-5 hover:text-red-500" /></a>
        <a href=""><FaPinterest className="size-5 hover:text-red-500" /></a>
       </div>
       <button>
        <IoSearchOutline className="size-5" /> 
       </button>
   </div>
      )
}