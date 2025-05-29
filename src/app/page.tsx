import About from "./components/About"
import Hero from "./components/Hero"
import OurValues from "./components/OurValues"
import TopProducts from "./components/TopProducts"

export default function Home() {
  return (
    <main className="min-h-svh">
      <Hero />
      <TopProducts />
      <OurValues />
      <About />
    </main>
  )
}
