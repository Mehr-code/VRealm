import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = function () {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav
      className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80
    "
    >
      <div className="comtainer px-4 mx-auto relative text-sm">
        <div className="flex justify-between item-center">
          {/* Logo + Logo's name */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">VRealm</span>
          </div>

          {/* Nav items for large screen */}
          <ul className="hidden lg:flex ml-14 space-x-12 items-center">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* Buttons in Nav Bar */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a className="py-2 px-3 border rounded-md" href="#">
              Sign in
            </a>
            <a
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
              href="#"
            >
              Create an account
            </a>
          </div>

          {/* Hamburger menu for Smaller screens */}
          <div className="lg:hidden md:flex justify-end items-center">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Display Navbar items in Hamberger Menu in Smaller screens */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign in
              </a>
              <a
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
                href="#"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
