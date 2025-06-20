import { Icon } from "@iconify/react"
import About from "@/components/About"

export default function AboutPage() {
  const points = [
    {
      name: "Dermatologically Tested",
      icon: "mdi:shield-check",
      description:
        "All our cosmetic products undergo rigorous dermatological testing to ensure safety and efficacy for all skin types.",
      color: "text-blue-600",
    },
    {
      name: "Natural Ingredients",
      icon: "mdi:leaf",
      description:
        "We use premium natural and organic ingredients sourced from sustainable suppliers worldwide.",
      color: "text-green-600",
    },
    {
      name: "Cruelty-Free",
      icon: "mdi:heart",
      description:
        "We are committed to ethical beauty practices and never test our products on animals.",
      color: "text-pink-600",
    },
    {
      name: "Paraben-Free",
      icon: "mdi:check-circle",
      description:
        "Our formulations are free from harmful parabens, sulfates, and toxic chemicals.",
      color: "text-purple-600",
    },
    {
      name: "Long-Lasting Formula",
      icon: "mdi:clock-outline",
      description:
        "Advanced formulations designed to provide all-day wear and lasting results.",
      color: "text-orange-600",
    },
    {
      name: "Suitable for Sensitive Skin",
      icon: "mdi:face-outline",
      description:
        "Gentle formulations specially designed for sensitive and reactive skin types.",
      color: "text-teal-600",
    },
  ]

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">
            Why Choose Our Products
          </h2>
          <p className="text-lg text-gray-600">
            Discover the benefits that make our products exceptional
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {points.map(point => (
            <div
              key={point.name}
              className="flex flex-col items-center rounded-lg border border-gray-100 p-6 text-center transition-shadow duration-200 hover:shadow-md"
            >
              <div className="mb-4">
                <Icon
                  className={point.color}
                  icon={point.icon}
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-800">
                {point.name}
              </h3>
              <p className="leading-relaxed text-gray-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <About />
    </section>
  )
}
