import { ReactNode } from "react";

interface NavLinkProps {
  children: ReactNode;
  href: string;
}

export const NavLink = ({ children, href }: NavLinkProps) => {
  return (
    <a
      href={href}
      className="text-xs font-bold py-2 border-transparent border-b-2 hover:border-red-500"
    >
      {children}
    </a>
  );
};
