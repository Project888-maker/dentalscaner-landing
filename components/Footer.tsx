export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-white font-bold text-xl mb-3">Dental<span className="text-blue-400">scaner</span></div>
            <p className="text-sm leading-relaxed">The UK's trusted dental tourism platform. Connecting patients with verified Turkish clinics since 2024.</p>
          </div>
          <div>
            <div className="text-white font-semibold mb-3">Treatments</div>
            <ul className="space-y-2 text-sm">
              {["Dental Implants","Veneers","All-on-4","Crowns & Bridges","Teeth Whitening"].map(t => <li key={t}><a href="#" className="hover:text-white transition">{t}</a></li>)}
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-3">Company</div>
            <ul className="space-y-2 text-sm">
              {["About Us","How It Works","Our Clinics","Patient Stories","Contact"].map(t => <li key={t}><a href="#" className="hover:text-white transition">{t}</a></li>)}
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-3">Contact</div>
            <ul className="space-y-2 text-sm">
              <li>hello@dentalscaner.co.uk</li>
              <li>+44 20 0000 0000</li>
              <li>Mon–Fri 9am–6pm GMT</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div>© 2026 Dentalscaner (DS Travel Tech Ltd). All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
