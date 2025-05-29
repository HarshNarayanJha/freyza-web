import ProductCard from "./reusable/ProductCard"

export default function TopProducts() {
  const topProducts = [
    { name: "HS 533" },
    { name: "Frecyy" },
    { name: "Masha Barrier" },
    { name: "Nilkilz" },
    { name: "..." },
  ]
  return (
    <section className="max-w-7xl px-16 py-4 m-auto">
      <div className="my-4">
        <h2 className="font-bold text-2xl">Top Products</h2>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {topProducts.map(product => (
          <ProductCard key={product.name} />
        ))}
      </div>
    </section>
  )
}
