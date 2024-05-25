import { NavLinks } from "./nav-links"


export const NavBar = () => {
    return ( 
    <header className="text-white container mx-auto px-4 md:px-10 h-20 flex items-center justify-between">
    <strong className="uppercase">
        Stranger Things
    </strong>
    <NavLinks />
    </header> 
    )
}