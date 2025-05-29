import Image from "next/image"

export default function About() {
  return (
    <section className="max-w-7xl px-16 py-12 m-auto">
      <div className="my-4">
        <h2 className="font-bold text-2xl">About Freyza</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Image
          src={"Freyza-golden.webp"}
          alt={"Freyza Logo"}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAPElEQVQIW2NkIAAYkeW/zlP9z510G0WMNAXYbMMwAaQI2RqwApjdIBqmACYGVvBjjrLKXyam2+gOBMkBADQyHQhaTfCnAAAAAElFTkSuQmCC"
          width={256}
          height={256}
          priority={false}
          loading="lazy"
          className="p-8"
        />
        <div className="flex-1">
          <p className="text-lg leading-relaxed text-gray-700">
            Freyza is dedicated to providing high-quality premium products at
            affordable prices. Established by a team of experts, our mission is
            to offer effective solutions that focus on helping patients achieve
            optimal health and beauty outcomes. By blending cutting-edge science
            with the finest ingredients, we create products tailored to meet
            each individual's unique needs. At Freyza, we believe everyone
            deserves access to exceptional care and visible results.
          </p>
        </div>
      </div>
    </section>
  )
}
