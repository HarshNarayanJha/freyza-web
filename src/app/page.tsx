import About from "./components/About"
import Hero from "./components/Hero"
import OurValues from "./components/OurValues"
import Reviews from "./components/Reviews"
import TopProducts from "./components/TopProducts"

export default function Home() {
  return (
    <main className="min-h-svh">
      <Hero />
      <TopProducts />
      <OurValues />
      <Reviews />
      <About />
    </main>
  )
}
