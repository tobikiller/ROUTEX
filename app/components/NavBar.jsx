import Link from "next/link";

export const NavBar = () => {
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
      className: "bg-RedOrange-0 py-3 px-2 rounded-lg font-bold",
    },
  ];

  return (
    <nav className="flex justify-between items-end mt-7 md:mx-auto">
      {" "}
      <Link href="/">
        <img src="assets/LA_PLACE-logo.svg" alt="laplace logo" />
      </Link>
      <ul className="flex items-center space-x-5">
        <div className="btn-click block sm:hidden space-y-1">
          <div className="w-10 h-1 bg-RedOrange-0"></div>
          <div className="w-10 h-1 bg-CreamyWhite-0"></div>
        </div>
        {link.map((links) => (
          <li key={links.id} className="hidden sm:block">
            <Link
              className={`${links.className} text-CreamyWhite-0`}
              href={links.href}
              key={links.id}
            >
              {links.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
