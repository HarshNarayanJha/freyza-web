import Link from "next/link"

export default function Navbar() {
  const navigation = [
    { title: "Products", path: "/products" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ]

  return (
    <nav className="w-full h-auto">
      <div className="flex items-center justify-between px-8 py-4 border-b border-neutral-500/25 shadow-sm">
        <Link href="/" className="flex flex-row items-center gap-4">
          <img
            src="/Freyza@1024px.png"
            width={50}
            height={120}
            alt="Freyza logo"
            className="inline"
          />
          <span className="font-bold text-xl">Freyza Cosmeceuticals</span>
        </Link>
        <div className="flex flex-row items-center gap-8">
          <ul className="flex flex-row items-center gap-8">
            {navigation.map(item => (
              <li key={item.path} className="font-semibold">
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
      </div>
    </nav>
  )
}
