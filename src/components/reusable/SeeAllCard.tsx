import { Icon } from "@iconify/react"
import Link from "next/link"

export default function SeeAllCard() {
  return (
    <div className="group w-64 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl border border-gray-200/50 bg-gradient-to-br from-blue-50 to-indigo-100 shadow-sm transition-all duration-300 hover:from-blue-100 hover:to-indigo-200 hover:shadow-lg">
      <Link href={"/products"}>
        <div className="relative grid h-full w-full content-center p-8 text-center">
          <div className="absolute inset-0 translate-x-full -skew-x-12 transform bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:-translate-x-full"></div>
          <Icon
            icon="mdi:arrow-right-bold"
            width={48}
            height={48}
            className="m-auto mb-4 text-blue-600 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110"
          />
          <h3 className="text-xl font-bold text-gray-800 transition-colors duration-200 group-hover:text-blue-700">
            See All Products
          </h3>
          <p className="mt-2 text-sm text-gray-600 opacity-75 transition-opacity duration-200 group-hover:opacity-100">
            Explore our complete asernal
          </p>
        </div>
      </Link>
    </div>
  )
}
