export default function Problem() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
        UK Dental Prices Are <span className="text-red-500">Out of Control</span>
      </h2>
      <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
        Full mouth implants in the UK can cost £25,000+. NHS waiting lists stretch 18+ months.
        Meanwhile, the exact same treatment in Turkey costs 70% less — with the same materials and technology.
      </p>
      <div className="grid md:grid-cols-3 gap-6 text-left">
        {[
          { emoji: "💸", title: "UK Prices Are Unaffordable", desc: "A single implant costs £2,500-£3,500 privately in the UK. Full mouth restoration? Up to £30,000." },
          { emoji: "⏳", title: "NHS Waiting Lists Are Brutal", desc: "Average 18-month wait for NHS dental treatment. Some patients wait over 2 years for basic procedures." },
          { emoji: "😰", title: "Quality Concerns Hold You Back", desc: 'You\'ve seen the "Turkey teeth" horror stories. You don\'t know which clinics to trust. That\'s exactly why we exist.' }
        ].map((item) => (
          <div key={item.title} className="bg-red-50 border border-red-100 rounded-2xl p-6">
            <div className="text-4xl mb-3">{item.emoji}</div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
