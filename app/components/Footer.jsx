import Link from "next/link";
import React from "react";

export const Footer = () => {
  const link = [
    {
      id: 1,
      name: "About Us",
      href: "/",
    },
    {
      id: 2,
      name: "Blog",
      href: "/",
    },
    {
      id: 3,
      name: "Get Started",
      href: "/",
      className:
        "bg-none py-0 px-0 sm:bg-RedOrange-0 sm:py-3 sm:px-2 rounded-lg font-bold",
    },
  ];
  return (
    <div>
      <footer className="glass flex flex-col justify-center items-center w-full sm:max-w-xs   mx-auto space-y-5 mt-24 p-5">
        <img className="w-[90px]" src="assets/icon.svg" alt="icon" />
        <ul className="flex gap-5">
          {link.map((footerLinks) => (
            <Link
              key={footerLinks.id}
              href={footerLinks.href}
              className="text-sm text-black"
            >
              {footerLinks.name}
            </Link>
          ))}
        </ul>
        <p className=" text-RedOrange-0 text-center text-xs font-bold">
          copyright 2023
        </p>
      </footer>
    </div>
  );
};
