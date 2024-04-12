"use client";

import { useState } from "react";
import { NavLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className=" absolute w-full">
      <nav className="flexBetween section padding-container py-5 ">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={150} height={150} />
        </Link>

        <ul className="gap-7 lg:flex hidden">
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

        <div className="hidden lg:block">
          <Button type="button" title="Contact" variant="btn-transparent" />
        </div>

        <div
          className="regular-40 text-text-light lg:hidden block"
          onClick={toggleMenu}
        >
          <CiMenuFries />
        </div>
      </nav>
      {isOpen && (
        <div className=" bg-text-bgDark w-full h-min py-5 px-5 absolute top-0">
          <div
            className="regular-40 text-text-light lg:hidden flex justify-end"
            onClick={toggleMenu}
          >
            <IoCloseOutline />
          </div>
          <ul className="gap-4 flex flex-col">
            {NavLinks.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className=" cursor-pointer regular-20 text-text-light"
              >
                {link.label}
              </Link>
            ))}
          </ul>

          <div className=" mt-3">
            <Button type="button" title="Contact" variant="btn-transparent" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
