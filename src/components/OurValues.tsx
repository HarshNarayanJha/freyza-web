import { Icon } from "@iconify/react"

export default function OurValues() {
  const values = [
    {
      icon: "mdi:check-circle-outline",
      color: "text-blue-600",
      title: "Quality",
      description:
        "We maintain the highest standards in all our pharmaceutical products and services.",
    },
    {
      icon: "mdi:lightbulb-outline",
      color: "text-yellow-500",
      title: "Innovation",
      description:
        "We continuously develop cutting-edge healthcare solutions to improve patient outcomes.",
    },
    {
      icon: "mdi:eye-outline",
      color: "text-green-500",
      title: "Transparency",
      description:
        "We are committed to open communication and ethical practices in our business.",
    },
  ]
  return (
    <section className="m-auto max-w-7xl px-16 py-12">
      <div className="my-4">
        <h2 className="text-2xl font-bold">Our Values</h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {values.map(value => {
          return (
            <div
              className="flex flex-col items-center text-center"
              key={value.title}
            >
              <div className="mb-4">
                <Icon
                  className={value.color}
                  icon={value.icon}
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
