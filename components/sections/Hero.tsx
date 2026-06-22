export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-800/50 border border-blue-600/30 rounded-full px-4 py-2 text-sm text-blue-200 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              150,000+ UK patients treated in Turkey this year
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Save Up to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                £20,000
              </span>{" "}
              on Dental Treatment in Turkey
            </h1>
            <p className="text-xl text-blue-200 mb-8 leading-relaxed">
              JCI-accredited clinics. UK aftercare included. Transparent pricing.
              The same quality as private UK dentists — at 70% less.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#get-quote" id="get-quote"
                className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg text-center transition-all duration-200 shadow-lg shadow-green-500/25">
                Get Free Quote in 60 Seconds →
              </a>
              <a href="#how-it-works"
                className="border border-blue-400/50 hover:border-blue-300 text-blue-200 hover:text-white font-semibold px-8 py-4 rounded-xl text-lg text-center transition">
                How It Works
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-blue-300">
              <span className="flex items-center gap-1.5">✓ No upfront commitment</span>
              <span className="flex items-center gap-1.5">✓ Free consultation</span>
              <span className="flex items-center gap-1.5">✓ Response in 24 hours</span>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6 text-center">Get Your Free Quote</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-1.5">Your Name</label>
                <input type="text" placeholder="John Smith"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:border-blue-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-1.5">Email Address</label>
                <input type="email" placeholder="john@email.com"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:border-blue-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-1.5">Phone Number</label>
                <input type="tel" placeholder="+44 7700 000000"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-300 focus:outline-none focus:border-blue-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-1.5">Treatment Needed</label>
                <select className="w-full bg-blue-800 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400">
                  <option>Dental Implants</option>
                  <option>Veneers</option>
                  <option>Full Mouth Restoration</option>
                  <option>Crowns & Bridges</option>
                  <option>Teeth Whitening</option>
                  <option>Other</option>
                </select>
              </div>
              <button type="submit"
                className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-4 rounded-xl text-lg transition-all duration-200 shadow-lg">
                Get My Free Quote →
              </button>
              <p className="text-xs text-blue-300 text-center">🔒 Your data is safe. No spam, ever.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
