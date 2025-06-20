import Image from "next/image"
import type { Product } from "@/lib/types/product"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group w-64 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl border border-gray-200/50 shadow-sm transition-all duration-200 hover:shadow-lg">
      <div className="relative overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.name}
          className="h-48 w-full scale-105 object-cover transition-transform duration-200 group-hover:scale-110"
          width={595}
          height={842}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAMCAYAAABfnvydAAAAsUlEQVQYV2NsaGj4zwAE//+DKQZGRkY4u7q2loERKAGRwQEY169f/9/f3x+sExsAm/APKMOEJPuX4T8DMwNEA2NebeP/5TNnMrx6+RRsN8ikqqoqhpaWFoY/f/4wMH77+/2/vKQyWMHPX78Y2NnYUGwCW2Ht5MLgFODD0JSbj+EWsAJxCRmGly+eQHSCKBmEIWAF954/Y1CSlGJAdhxMCTwcQIGBzaOEAwpkBTC4cYYkAJyPWUCMwSmTAAAAAElFTkSuQmCC"
        />
      </div>
      <div className="p-4">
        <div className="mb-2">
          <span className="inline-block rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-600">
            {product.category}
          </span>
        </div>
        <h3 className="mb-2 text-lg font-semibold text-gray-900">
          {product.name}
        </h3>
        <p className="line-clamp-2 text-sm text-gray-600">
          {product.description}
        </p>
      </div>
    </div>
  )
}
