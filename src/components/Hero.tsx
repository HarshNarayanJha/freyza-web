import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="m-auto max-w-7xl px-16 py-12">
      <div className="group relative h-[32rem] w-full overflow-hidden rounded-xl p-8 shadow-inner">
        <Image
          src={"/hero.webp"}
          alt="Hero background"
          placeholder="blur"
          loading="eager"
          priority={true}
          width={1000}
          height={500}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAnklEQVQIWw2MwQoBURhGz517///OjPIIyMKbWHoDJckDKFtbe+9AKbKy9iSiyWJKSSKLqXHdxamvztcxk30R8ryJOodPMxKxuBSsi1gw00MZbFw+ayBJlF5ZlkcW7QHqA2a8uwZJFNUUKw5Rj6tfzFofVs8uZrQtgjiJSYuNhap6E+5n5ps+vVOFGa4vwYuQWI2HAPyoqy+38kGnqfwB+0wpsJcrXUEAAAAASUVORK5CYII="
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center brightness-75 transition-transform group-hover:scale-105"
        />
        <div className="relative grid h-full w-full grid-cols-1 grid-rows-1 items-end py-4">
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold text-white md:text-5xl">
              Freyza Cosmeceuticals
            </h1>
            <p className="mb-2.5 font-semibold text-emerald-50">
              Innovating healthcare solutions for a healthier tomorrow.
            </p>
            <Link href={"/products"}>
              <button
                type="button"
                className="w-min cursor-pointer rounded-md bg-green-600 px-4 py-2 font-semibold text-nowrap text-white shadow-md transition-shadow duration-300 hover:shadow-lg"
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
