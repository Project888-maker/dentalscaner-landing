"use client"
import { useState } from "react"

const faqs = [
  { q: "Is dental treatment in Turkey actually safe?", a: "Yes — when you use verified, JCI-accredited clinics. Turkey has some of the world's most advanced dental facilities, many purpose-built for medical tourism. Our clinics are independently verified, and all dentists have international qualifications. The key is knowing which clinics to trust — that's what we do." },
  { q: "What if something goes wrong after I return to the UK?", a: "Every treatment comes with a clinic guarantee. We also connect you with our UK aftercare network — a group of dentists who work with dental tourism patients and can handle any follow-up needs. You're never left without support." },
  { q: "Are the materials the same quality as in the UK?", a: "Yes. Top Turkish clinics use the same international brands as UK private dentists — Nobel Biocare, Straumann, Osstem implants. The difference is labour costs and overheads, not material quality." },
  { q: "How long do I need to stay in Turkey?", a: "Typically 5-7 days for implants, 3-5 days for veneers. We design the trip to be as efficient as possible, and we handle all the logistics so you're not wasting time." },
  { q: "What does your service cost?", a: "We charge a 15% service fee on your treatment, which covers clinic matching, logistics coordination, and UK aftercare connection. This is still far less than what you'd pay for the same treatment in the UK." },
  { q: "Will my UK dentist know I've had treatment abroad?", a: "Only if you tell them. There's no obligation to disclose, though we always recommend informing your regular dentist for continuity of care." },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section id="faq" className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Your Questions Answered</h2>
          <p className="text-xl text-gray-500">Everything you need to know before you decide</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition">
                <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                <span className="text-blue-600 text-xl font-bold flex-shrink-0">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
