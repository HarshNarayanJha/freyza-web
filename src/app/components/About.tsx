import Freyza from "@/../public/Freyza-golden.webp"
import Image from "next/image"

export default function About() {
  return (
    <section className="max-w-7xl px-16 py-12 m-auto">
      <div className="my-4">
        <h2 className="font-bold text-2xl">About Freyza</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Image
          src={Freyza}
          alt={"Freyza Logo"}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8P5+nHgAGegIribKufQAAAABJRU5ErkJggg=="
          width={256}
          height={256}
          priority={false}
          loading="lazy"
          className="p-8"
        />
        <div className="flex-1">
          <p className="text-lg leading-relaxed text-gray-700">
            Freyza Cosmeceuticals is a leading private limited medicine company
            dedicated to developing and delivering innovative healthcare
            solutions. Our mission is to improve lives through high-quality,
            effective pharmaceutical products. We are committed to upholding the
            highest standards of integrity, quality, and patient care in
            everything we do.
          </p>
        </div>
      </div>
    </section>
  )
}
