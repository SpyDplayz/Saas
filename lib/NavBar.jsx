import React from "react";
import Link from "next/link";

export const NavBar = () => {
  return (
    <>
      {/* Top Nav Bar */}
      <nav className="flex justify-between items-center bg-gray-100 py-2 px-6">
        {/* Left side (links) */}
        <div className="flex space-x-4 text-sm">
          <a href="tel:+919924748951" className="text-blue-600 hover:underline">
            (+91) 9924748951
          </a>
          <a href="mailto:info@durgatractor" className="text-blue-700 hover:underline">
            info@durgatractor
          </a>
          <a href="#" className="text-blue-700 hover:underline">
            Location
          </a>
        </div>

        {/* Right side (span) */}
        <span className="text-sm text-gray-600">
          Mon-Fri: 8AM-6PM | Sat: 8AM-4PM
        </span>
      </nav>

      {/* Main Navigation Bar */}
      <nav>
        <div className="flex justify-between items-center bg-gray-100 py-4 px-6 shadow">
          <div className="text-2xl font-bold text-gray-800">
            Durga Tractor
          </div>
          <div className="space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-700 hover:underline">Home</Link>
            <Link href="/products" className="text-gray-600 hover:text-blue-700 hover:underline">Products</Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-700 hover:underline">Services</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-700 hover:underline">Contact</Link>
          </div>
        </div>
      </nav>
    </>
  );
};
