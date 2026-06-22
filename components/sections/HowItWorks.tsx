const steps = [
  { number: "01", title: "Tell Us What You Need", desc: "Fill in our 60-second form. Tell us your treatment, budget, and timeline. No commitment required.", icon: "📋" },
  { number: "02", title: "We Match You to Verified Clinics", desc: "We search our network of 126 JCI-accredited clinics and present you with personalised options and transparent pricing.", icon: "🔍" },
  { number: "03", title: "We Arrange Everything", desc: "Flights, hotel, airport transfers, appointments — we coordinate it all. You just show up and smile.", icon: "✈️" },
  { number: "04", title: "Treatment + UK Aftercare", desc: "Get world-class treatment in Turkey, then return home with our UK aftercare network supporting your recovery.", icon: "🦷" },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-blue-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">How Dentalscaner Works</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">From first enquiry to perfect smile in 4 simple steps</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-700 z-0" />
              )}
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 border-2 border-blue-600">
                  {step.icon}
                </div>
                <div className="text-blue-400 font-bold text-sm mb-2">{step.number}</div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-blue-300 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#get-quote" className="inline-block bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-4 rounded-xl text-lg transition">
            Start My Free Consultation →
          </a>
        </div>
      </div>
    </section>
  )
}
