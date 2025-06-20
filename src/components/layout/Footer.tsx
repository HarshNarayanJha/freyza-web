import { Icon } from "@iconify/react"
import Link from "next/link"

export default function Footer() {
  const links = [
    { title: "Safety Information", url: "/safety" },
    { title: "Clinical Studies", url: "/clinical-studies" },
    { title: "Contact Us", url: "/contact" },
  ]

  const socials = [
    { icon: "logos:facebook", title: "Facebook", url: "#" },
    { icon: "logos:twitter", title: "X (Twitter)", url: "#" },
    { icon: "lineicons:amazon-original", title: "Amazon", url: "#" },
  ]

  return (
    <footer className="m-auto flex w-full max-w-3xl flex-col items-center justify-evenly gap-6 px-8 py-16">
      <div className="grid w-full grid-cols-3 content-center items-center gap-4">
        {links.map(link => (
          <Link
            key={link.title}
            href={link.url}
            className="text-center text-pink-800"
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
            <span className="sr-only">{social.title}</span>
          </Link>
        ))}
      </div>
      <p className="text-center text-pink-800">
        &copy; 2025 Freyza Cosmeceuticals Private Limited. All rights reserved
      </p>
      <p className="text-center text-xs">
        Designed and Made into reality by{" "}
        <Link
          href="https://harshnj.is-a.dev"
          target="_blank"
          className="text-blue-700"
        >
          Harsh Narayan Jha
        </Link>
      </p>
    </footer>
  )
}
