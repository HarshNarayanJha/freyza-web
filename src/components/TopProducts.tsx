import topProducts from "@/data/top_products.json"
import type { Product } from "@/lib/types/product"
import ProductCard from "./reusable/ProductCard"
import SeeAllCard from "./reusable/SeeAllCard"

export default function TopProducts() {
  const products: Product[] = topProducts as Product[]

  return (
    <section className="max-w-7xl px-16 py-4 m-auto">
      <div className="my-4">
        <h2 className="font-bold text-2xl">Our Top Products</h2>
      </div>
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
        <SeeAllCard />
      </div>
    </section>
  )
}
