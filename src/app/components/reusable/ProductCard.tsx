import type { Product } from "@/lib/types/product"
import Image from "next/image"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex-shrink-0 w-64 border border-gray-200/50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer group">
      <div className="relative overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover scale-105 group-hover:scale-110 transition-transform duration-200"
          width={595}
          height={842}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAQAAADYv8WvAAAAD0lEQVR42mNsqGdgYAQRAAwOAgHSpBruAAAAAElFTkSuQmCC"
        />
      </div>
      <div className="p-4">
        <div className="mb-2">
          <span className="inline-block px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
            {product.category}
          </span>
        </div>
        <h3 className="font-semibold text-lg text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>
      </div>
    </div>
  )
}
