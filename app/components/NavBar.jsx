"use client";

import Link from "next/link";
import { useState } from "react";

export const NavBar = () => {
  const [navactive, setNavActive] = useState(false);

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
    <nav className="flex justify-between items-end mt-7 md:mx-auto relative w-full ">
      {" "}
      <Link href="/">
        <img src="assets/LA_PLACE-logo.svg" alt="laplace logo" />
      </Link>
      <ul
        className={`${
          navactive
            ? "fixed top-[100px]  right-0 z-40 w-screen  flex-col flex items-start text-CreamyWhite-0 justify-center text-4xl space-y-5 glass h-fit rounded-b-2xl  px-7 py-10 transition-all duration-300 delay-300 visibles"
            : "invisible sm:visible top-[100px]  sm:opacity-100  sm:right-0 sm:top-0 absolute sm:relative"
        }   sm:flex sm:items-center sm:space-x-5 `}
      >
        {link.map((links) => (
          <li key={links.id} className="sm:block ">
            <Link
              className={`  ${links.className} sm:text-CreamyWhite-0  `}
              href={links.href}
              key={links.id}
            >
              {links.name}
            </Link>
          </li>
        ))}
      </ul>
      <div
        className="btn-click fixed right-3 block z-40 sm:hidden space-y-1"
        onClick={() => setNavActive(!navactive)}
      >
        <div className="w-10 h-1  bg-RedOrange-0"></div>
        <div className="w-10 h-1 bg-CreamyWhite-0"></div>
      </div>
    </nav>
  );
};
