export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-blue-900">Dental<span className="text-blue-500">scaner</span></span>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">UK Trusted</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#how-it-works" className="hover:text-blue-600 transition">How It Works</a>
          <a href="#prices" className="hover:text-blue-600 transition">Prices</a>
          <a href="#safety" className="hover:text-blue-600 transition">Safety</a>
          <a href="#faq" className="hover:text-blue-600 transition">FAQ</a>
        </div>
        <a href="#get-quote" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition">
          Free Quote
        </a>
      </div>
    </nav>
  )
}
