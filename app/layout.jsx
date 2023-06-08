import "./globals.css";
import { NavBar } from "./components/NavBar";

export const metadata = {
  title: "LA PLACE",
  description: "Your map device",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="shortcut icon"
        href="favicon/favicon.ico"
        type="image/x-icon"
      />
      <body className="font-NeueLeiden max-w-4xl mx-4 md:mx-auto overflow-x-hidden bg-MetroriteBlack-0">
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
