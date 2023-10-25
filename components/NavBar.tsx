import { navLinks } from "@/utils/navLinks";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex flex-row gap-2 ml-1 mt-1">
      {navLinks.map((link) => {
        return (
          <Link
            className="hover:text-lime-600"
            href={link.href}
            key={link.text}
          >
            {link.text}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
