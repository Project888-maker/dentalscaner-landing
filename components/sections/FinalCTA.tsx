export default function FinalCTA() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-green-600 to-emerald-700 text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Ready to Save Thousands on Your Dental Treatment?
        </h2>
        <p className="text-xl text-green-100 mb-10 leading-relaxed">
          Join 150,000+ UK patients who chose smarter. Free consultation. No commitment.
          Response within 24 hours.
        </p>
        <a href="#get-quote"
          className="inline-block bg-white text-green-700 hover:bg-green-50 font-extrabold px-12 py-5 rounded-xl text-xl transition-all duration-200 shadow-2xl">
          Get My Free Quote Now →
        </a>
        <div className="flex justify-center gap-8 mt-10 text-green-200 text-sm">
          <span>✓ Free consultation</span>
          <span>✓ No obligation</span>
          <span>✓ Response in 24hrs</span>
          <span>✓ UK-based support</span>
        </div>
      </div>
    </section>
  )
}
