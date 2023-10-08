import "./globals.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

export const metadata = {
  title: "ROUTEX",
  description: "Your map device",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="assets/icon.svg" type="image/x-icon" />
      <body className="font-NeueLeiden max-w-4xl mx-4 md:mx-auto overflow-x-hidden bg-white">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
