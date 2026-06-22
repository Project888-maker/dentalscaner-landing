import Hero from "../components/sections/Hero"
import TrustBar from "../components/sections/TrustBar"
import Problem from "../components/sections/Problem"
import HowItWorks from "../components/sections/HowItWorks"
import PriceComparison from "../components/sections/PriceComparison"
import Testimonials from "../components/sections/Testimonials"
import Safety from "../components/sections/Safety"
import FAQ from "../components/sections/FAQ"
import FinalCTA from "../components/sections/FinalCTA"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Problem />
      <HowItWorks />
      <PriceComparison />
      <Testimonials />
      <Safety />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
