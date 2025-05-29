"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { title: "Products", path: "/products" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ]

  return (
    <nav className="w-full h-auto">
      <div className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-neutral-500/25 shadow-sm">
        <Link href="/" className="flex flex-row items-center gap-2 md:gap-4">
          <img
            src="/Freyza@1024px.webp"
            width={50}
            height={120}
            alt="Freyza logo"
            className="inline"
          />
          <h2 className="font-bold text-lg md:text-xl">
            Freyza Cosmeceuticals
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row items-center gap-8">
          <ul className="flex flex-row items-center gap-8">
            {navigation.map(item => (
              <li key={item.title} className="font-semibold">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <button
            className="rounded-md bg-primary/75 text-center w-10 h-10"
            type="button"
          >
            S
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            className="rounded-md bg-primary/75 text-center w-10 h-10"
            type="button"
          >
            S
          </button>
          <button
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
          >
            <div className="w-6 h-6 flex flex-col justify-center">
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1" : ""}`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-current mt-1 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-current mt-1 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1" : ""}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-b border-neutral-500/25 bg-white">
          <ul className="flex flex-col py-4">
            {navigation.map(item => (
              <li key={item.title} className="font-semibold">
                <Link
                  href={item.path}
                  className="block px-4 py-2 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
