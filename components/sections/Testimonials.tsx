const testimonials = [
  { name: "Sarah M.", location: "Manchester", treatment: "Full Mouth Implants", saved: "£17,500", rating: 5, text: "I was terrified at first. But Dentalscaner found me a clinic with a UK-trained dentist, arranged everything, and I saved £17,500. My teeth are perfect. Best decision I ever made." },
  { name: "James T.", location: "London", treatment: "Veneers (10 teeth)", saved: "£6,800", rating: 5, text: "Did it all in 5 days. The clinic was spotless, the dentist spoke perfect English, and the results are incredible. Way better than I expected for the price." },
  { name: "Emma R.", location: "Birmingham", treatment: "All-on-4 Implants", saved: "£12,500", rating: 5, text: "After waiting 2 years on the NHS with no end in sight, I found Dentalscaner. Within 3 weeks I was in Turkey. Now I have a full set of perfect teeth and money left over." },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Real Patients. Real Results.</h2>
          <p className="text-xl text-gray-500">Join thousands of UK patients who've already made the smart choice</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => <span key={i} className="text-yellow-400 text-xl">★</span>)}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-bold text-gray-900">{t.name}</div>
                <div className="text-sm text-gray-500">{t.location} • {t.treatment}</div>
                <div className="text-green-600 font-bold text-sm mt-1">Saved {t.saved}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
