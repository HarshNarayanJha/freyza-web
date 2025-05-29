import { Icon } from "@iconify/react"
import Link from "next/link"

export default function Footer() {
  const links = [
    { title: "Privacy Policy", url: "#" },
    { title: "Terms of Service", url: "#" },
    { title: "Contact Us", url: "/contact" },
  ]

  const socials = [
    { icon: "logos:facebook", title: "Facebook", url: "#" },
    { icon: "logos:twitter", title: "X (Twitter)", url: "#" },
    { icon: "lineicons:amazon-original", title: "Amazon", url: "#" },
  ]

  return (
    <footer className="w-full flex flex-col gap-4 items-center justify-evenly max-w-3xl m-auto py-16 px-8">
      <div className="container flex flex-row items-center justify-between gap-4">
        {links.map(link => (
          <Link
            key={link.title}
            href={link.url}
            className="text-pink-800"
            target="_blank"
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="container flex flex-row items-center justify-center gap-4">
        {socials.map(social => (
          <Link
            key={social.title}
            href={social.url}
            className="text-pink-800"
            target="_blank"
          >
            <Icon
              icon={social.icon}
              width={28}
              height={28}
              className="text-[initial]"
            />
          </Link>
        ))}
      </div>
      <p className="text-pink-800 text-center">
        &copy; 2025 Freyza Cosmeceuticals Private Limited. All rights reserved
      </p>
    </footer>
  )
}
