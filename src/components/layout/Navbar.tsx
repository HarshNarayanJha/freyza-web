"use client"

import { Icon } from "@iconify/react"
import Image from "next/image"
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
    <nav className="h-auto w-full">
      <div className="flex items-center justify-between border-b border-neutral-500/25 px-4 py-4 shadow-sm md:px-8">
        <Link href="/" className="flex flex-row items-center gap-2 md:gap-4">
          <Image
            src={"Freyza.png"}
            alt="Freyza Logo"
            className="inline w-12 invert md:w-16"
            width={48}
            height={48}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOUrQcAAL8AnkwTEGYAAAAASUVORK5CYII="
          />
          <h2 className="text-lg font-bold md:text-2xl">
            Freyza Cosmeceuticals
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden flex-row items-center gap-8 md:flex">
          <ul className="flex flex-row items-center gap-8">
            {navigation.map(item => (
              <li key={item.title} className="font-semibold">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <button
            className="h-10 w-10 rounded-md bg-primary/75 text-center shadow"
            type="button"
          >
            <Icon icon="mdi:search" className="m-auto" width={24} height={24} />
            <span className="sr-only">Search</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            className="h-10 w-10 rounded-md bg-primary/75 text-center shadow"
            type="button"
          >
            <Icon icon="mdi:search" className="m-auto" width={24} height={24} />
            <span className="sr-only">Search</span>
          </button>
          <button
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
          >
            <div className="flex h-6 w-6 flex-col justify-center">
              <Icon
                icon={isMenuOpen ? "mdi:close" : "mdi:menu"}
                className="m-auto"
                width={24}
                height={24}
              />
              <span className="sr-only">
                {isMenuOpen ? "Close Menu" : "Open Menu"}
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="border-b border-neutral-500/25 bg-white md:hidden">
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
