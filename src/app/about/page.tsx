import About from "@/app/components/About"
import { Icon } from "@iconify/react"

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
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Why Choose Our Products
          </h2>
          <p className="text-lg text-gray-600">
            Discover the benefits that make our products exceptional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {points.map(point => (
            <div
              key={point.name}
              className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                <Icon
                  className={point.color}
                  icon={point.icon}
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-gray-800">
                {point.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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
