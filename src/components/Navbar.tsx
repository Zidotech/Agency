import { NavLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="max-container padding-container py-4 absolute w-full">
      <nav className="flexBetween">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
        </Link>

        <ul className="gap-7 flex">
          {NavLinks.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className=" cursor-pointer regular-16 text-text-light"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <Button type="button" title="Contact" variant="btn-transparent" />
      </nav>
    </header>
  );
};

export default Navbar;
