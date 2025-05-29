import Link from "next/link"

export default function Hero() {
  return (
    <section className="max-w-7xl px-16 py-12 m-auto">
      <div
        className="rounded-xl p-8 bg-cover bg-center bg-no-repeat w-full h-[32rem] shadow-inner"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1628771065518-0d82f1938462?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="grid grid-cols-1 grid-rows-1 h-full w-full justify-start items-end py-4">
          <div className="flex flex-col gap-6">
            <h1 className="font-extrabold text-black text-3xl md:text-5xl">
              Freyza Cosmeceuticals
            </h1>
            <p className="font-medium mb-2.5">
              Innovating healthcare solutions for a healthier tomorrow.
            </p>
            <Link href={"/products"}>
              <button
                type="button"
                className="bg-green-500 w-min text-nowrap text-white font-semibold px-4 py-2 rounded-md shadow-md cursor-pointer hover:shadow-lg hover:bg-green-600 transition-[shadow_color] duration-300"
              >
                Explore Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
