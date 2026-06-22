const treatments = [
  { name: "Single Dental Implant", uk: "£2,500", turkey: "£750", save: "£1,750" },
  { name: "Full Mouth Implants", uk: "£25,000", turkey: "£7,500", save: "£17,500" },
  { name: "Veneers (8 teeth)", uk: "£8,000", turkey: "£2,400", save: "£5,600" },
  { name: "All-on-4 Implants", uk: "£18,000", turkey: "£5,500", save: "£12,500" },
  { name: "Crowns (per tooth)", uk: "£1,200", turkey: "£350", save: "£850" },
  { name: "Teeth Whitening", uk: "£600", turkey: "£180", save: "£420" },
]

export default function PriceComparison() {
  return (
    <section id="prices" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            The Numbers Don't Lie
          </h2>
          <p className="text-xl text-gray-600">Same treatment. Same materials. 70% less cost.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-4 bg-blue-900 text-white text-sm font-bold py-4 px-6">
            <div>Treatment</div>
            <div className="text-center">UK Price</div>
            <div className="text-center">Turkey Price</div>
            <div className="text-center text-green-400">You Save</div>
          </div>
          {treatments.map((t, i) => (
            <div key={t.name} className={`grid grid-cols-4 py-4 px-6 text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} border-b border-gray-100`}>
              <div className="font-medium text-gray-900">{t.name}</div>
              <div className="text-center text-red-500 font-semibold line-through">{t.uk}</div>
              <div className="text-center text-blue-700 font-bold">{t.turkey}</div>
              <div className="text-center text-green-600 font-bold">{t.save}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-xs mt-4">
          * Prices are indicative. Final quotes depend on your specific treatment plan. All-inclusive packages available.
        </p>
        <div className="text-center mt-8">
          <a href="#get-quote" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-xl text-lg transition">
            Get My Personalised Quote →
          </a>
        </div>
      </div>
    </section>
  )
}
