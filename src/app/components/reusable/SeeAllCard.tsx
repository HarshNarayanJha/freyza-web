import Link from "next/link"

export default function SeeAllCard() {
  return (
    <div className="flex-shrink-0 w-64 border border-gray-200/50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer group">
      <Link href={"/products"}>
        <div className="p-4 grid content-center w-full h-full text-center">
          <span>Left Arrow</span>
          <h3 className="font-semibold text-lg text-gray-900 mb-2">
            See All Products
          </h3>
        </div>
      </Link>
    </div>
  )
}
