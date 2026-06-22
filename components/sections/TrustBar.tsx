const stats = [
  { number: "150,000+", label: "UK Patients Treated" },
  { number: "70%", label: "Average Savings" },
  { number: "126", label: "Verified Clinics" },
  { number: "4.9★", label: "Average Rating" },
  { number: "£0", label: "Consultation Fee" },
]

export default function TrustBar() {
  return (
    <section className="bg-gray-50 border-y border-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-blue-900">{stat.number}</div>
              <div className="text-sm text-gray-500 font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
