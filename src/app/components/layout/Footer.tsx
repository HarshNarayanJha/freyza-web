import Link from "next/link"

export default function Footer() {
  const links = [
    { title: "Privacy Policy", url: "#" },
    { title: "Terms of Service", url: "#" },
    { title: "Contact Us", url: "/contact" },
  ]

  const socials = [
    { icon: "facebook", title: "Facebook", url: "#" },
    { icon: "twitter", title: "X (Twitter)", url: "#" },
    { icon: "amazon", title: "Amazon", url: "#" },
  ]

  return (
    <footer className="w-full flex flex-col gap-4 items-center justify-evenly max-w-5xl m-auto py-8 px-8">
      <div className="container flex flex-row items-center justify-between gap-4">
        {links.map(link => (
          <Link key={link.title} href={link.url} className="text-pink-800">
            {link.title}
          </Link>
        ))}
      </div>
      <div className="container flex flex-row items-center justify-center gap-4">
        {socials.map(social => (
          <Link key={social.title} href={social.url} className="text-pink-800">
            {social.title}
          </Link>
        ))}
      </div>
      <p className="text-pink-800">
        &copy; 2025 Freyza Cosmeceuticals Private Limited. All rights reserved
      </p>
    </footer>
  )
}
