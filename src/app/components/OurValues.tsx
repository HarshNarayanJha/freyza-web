import { Icon } from "@iconify/react"

export default function OurValues() {
  return (
    <section className="max-w-7xl px-16 py-12 m-auto">
      <div className="my-4">
        <h2 className="font-bold text-2xl">Our Values</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <Icon
              className="text-blue-600"
              icon="mdi:check-circle-outline"
              width={64}
              height={64}
            />
          </div>
          <h3 className="font-semibold text-lg mb-2">Quality</h3>
          <p className="text-gray-600">
            We maintain the highest standards in all our pharmaceutical products
            and services.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <Icon
              className="text-green-600"
              icon="mdi:star-outline"
              width={64}
              height={64}
            />
          </div>
          <h3 className="font-semibold text-lg mb-2">Innovation</h3>
          <p className="text-gray-600">
            We continuously develop cutting-edge healthcare solutions to improve
            patient outcomes.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <Icon
              className="text-red-600"
              icon="mdi:heart-outline"
              width={64}
              height={64}
            />
          </div>
          <h3 className="font-semibold text-lg mb-2">Integrity</h3>
          <p className="text-gray-600">
            We operate with transparency and ethical practices in all our
            business relationships.
          </p>
        </div>
      </div>
    </section>
  )
}
