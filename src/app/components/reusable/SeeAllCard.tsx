import { Icon } from "@iconify/react"
import Link from "next/link"

export default function SeeAllCard() {
  return (
    <div className="flex-shrink-0 w-64 border border-gray-200/50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group bg-gradient-to-br from-blue-50 to-indigo-100 hover:from-blue-100 hover:to-indigo-200">
      <Link href={"/products"}>
        <div className="p-8 grid content-center w-full h-full text-center relative">
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
          <Icon
            icon="mdi:arrow-right-bold"
            width={48}
            height={48}
            className="m-auto mb-4 text-blue-600 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300"
          />
          <h3 className="font-bold text-xl text-gray-800 group-hover:text-blue-700 transition-colors duration-200">
            See All Products
          </h3>
          <p className="text-sm text-gray-600 mt-2 opacity-75 group-hover:opacity-100 transition-opacity duration-200">
            Explore our complete asernal
          </p>
        </div>
      </Link>
    </div>
  )
}
