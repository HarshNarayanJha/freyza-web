export default function OurValues() {
  return (
    <section className="max-w-7xl px-16 py-12 m-auto">
      <div className="my-4">
        <h2 className="font-bold text-2xl">Our Values</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
            <svg
              className="w-16 h-16 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <h3 className="font-semibold text-lg mb-2">Quality</h3>
          <p className="text-gray-600">
            We maintain the highest standards in all our pharmaceutical products
            and services.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
            <svg
              className="w-16 h-16 text-green-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <h3 className="font-semibold text-lg mb-2">Innovation</h3>
          <p className="text-gray-600">
            We continuously develop cutting-edge healthcare solutions to improve
            patient outcomes.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
            <svg
              className="w-16 h-16 text-red-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
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
