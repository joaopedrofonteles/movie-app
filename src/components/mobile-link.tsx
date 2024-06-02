import { Link } from "../types/link";

interface MobileLinkProps {
  link: Link;
}

export const MobileLink = ({ link }: MobileLinkProps) => {
  return (
    <a
      href={link.href}
      className="text-black font-semibold text-2xl p-2 border-b w-full text-center hover:bg-zinc-100">
      {link.label}
    </a>
  );
};
