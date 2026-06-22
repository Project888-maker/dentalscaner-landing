const points = [
  { icon: "🏥", title: "JCI-Accredited Clinics Only", desc: "Joint Commission International accreditation — the gold standard for global healthcare quality." },
  { icon: "👨‍⚕️", title: "Verified Dentist Credentials", desc: "Every dentist in our network has verified qualifications, experience, and peer reviews." },
  { icon: "🇬🇧", title: "UK Aftercare Network", desc: "Return home with confidence. We connect you with UK dentists for any follow-up care you need." },
  { icon: "📋", title: "Transparent Pricing", desc: "No hidden costs. No surprises. Your quote is final — what you see is what you pay." },
  { icon: "🛡️", title: "Treatment Guarantee", desc: "All treatments come with clinic guarantees. If anything needs correcting, it will be." },
  { icon: "📞", title: "24/7 UK Support", desc: "Our team is available around the clock before, during, and after your treatment." },
]

export default function Safety() {
  return (
    <section id="safety" className="py-20 bg-blue-950 text-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Your Safety Is Our Priority</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            We know the horror stories. That's exactly why we built Dentalscaner — to be the trust layer
            that protects UK patients.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {points.map((p) => (
            <div key={p.title} className="bg-blue-900/50 border border-blue-800/50 rounded-2xl p-6">
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-blue-300 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
