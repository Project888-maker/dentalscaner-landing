import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Save 70% on Dental Implants in Turkey | Dentalscaner",
  description: "UK patients save £10,000-£20,000 on dental implants, veneers and crowns at JCI-accredited Turkish clinics. Free consultation, UK aftercare included.",
  keywords: "dental tourism Turkey, dental implants Turkey UK, cheap dental implants Turkey",
  openGraph: {
    title: "Save 70% on Dental Implants in Turkey | Dentalscaner",
    description: "JCI-accredited clinics, UK aftercare, transparent pricing. Join 150,000+ UK patients.",
    url: "https://dentalscaner.co.uk",
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  )
}
