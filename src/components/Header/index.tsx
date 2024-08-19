"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import Logo from "./logo";
import { buttons, links } from "./constant";
import Button from "../Button";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(pathname);
  return (
    <header className="bg-[#080404] text-white p-3  border-b border-b-stone-900 ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo */}
          <Link href="/">
            <Logo />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-4 text-[#888] text-sm ml-10">
            {links.map((item) => (
              <li
                key={item.id}
                className={`hover:text-white ${
                  item.url === pathname ? "text-white" : ""
                }`}
              >
                <Link href={`${item.url}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className="ml-auto hidden md:flex">
          {buttons.map((button) => (
            <Button
              key={button.id}
              id={button.id}
              text={button.text}
              icon={button.icon}
              type={button.type}
              className={button.className}
              isLink={button.isLink}
              href={button.href}
            />
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center ml-auto">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#080404] p-3">
          <ul className="space-y-3 text-sm text-[#888]">
            {["Showcase", "Docs", "Blog", "Analytics", "Contact"].map(
              (item) => (
                <li key={item} className="hover:text-white">
                  <Link href={`/${item.toLowerCase()}`}>{item}</Link>
                </li>
              )
            )}
          </ul>
          <div className="mt-4 flex flex-col space-y-3">
            {buttons.map((button) => (
              <Button
                key={button.id}
                id={button.id}
                text={button.text}
                icon={button.icon}
                type={button.type}
                className={button.className}
                isLink={button.isLink}
                href={button.href}
              />
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
