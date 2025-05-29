import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="max-w-7xl px-16 py-12 m-auto">
      <div className="rounded-xl p-8 w-full h-[32rem] shadow-inner relative overflow-hidden group">
        <Image
          src={"/hero.webp"}
          alt="Hero background"
          placeholder="blur"
          loading="eager"
          priority={true}
          width={1000}
          height={500}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAnklEQVQIWw2MwQoBURhGz517///OjPIIyMKbWHoDJckDKFtbe+9AKbKy9iSiyWJKSSKLqXHdxamvztcxk30R8ryJOodPMxKxuBSsi1gw00MZbFw+ayBJlF5ZlkcW7QHqA2a8uwZJFNUUKw5Rj6tfzFofVs8uZrQtgjiJSYuNhap6E+5n5ps+vVOFGa4vwYuQWI2HAPyoqy+38kGnqfwB+0wpsJcrXUEAAAAASUVORK5CYII="
          className="absolute inset-0 w-full h-full object-cover object-center -z-10 brightness-75 group-hover:scale-105 transition-transform"
        />
        <div className="grid grid-cols-1 grid-rows-1 h-full w-full justify-start items-end py-4 relative">
          <div className="flex flex-col gap-6">
            <h1 className="font-extrabold text-white text-3xl md:text-5xl">
              Freyza Cosmeceuticals
            </h1>
            <p className="font-medium text-emerald-50 mb-2.5">
              Innovating healthcare solutions for a healthier tomorrow.
            </p>
            <Link href={"/products"}>
              <button
                type="button"
                className="bg-green-600 w-min text-nowrap text-white font-semibold px-4 py-2 rounded-md shadow-md cursor-pointer hover:shadow-lg hover:bg-green-700 transition-[shadow_color] duration-300"
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
