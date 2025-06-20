import type { Metadata } from "next"
import { Lora, Nunito_Sans } from "next/font/google"
import "./globals.css"
import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
})

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Freyza Cosmeceuticals",
  description: "FREYZA COSMECEUTICALS PRIVATE LIMITED",
  category: "Cosmetics",
  authors: [{ name: "Harsh Narayan Jha", url: "https://harshnj.is-a.dev" }],
  keywords: ["Cosmetics", "Beauty", "Skincare", "Cosmeceuticals"],
  openGraph: {
    type: "website",
    description: "FREYZA COSMECEUTICALS PRIVATE LIMITED",
    countryName: "IN",
    siteName: "Freyza Cosmeceuticals",
    title: "Freyza Cosmeceuticals",
    images: [
      {
        url: "/logo.png",
        width: 64,
        height: 64,
        alt: "Freyza Cosmeceuticals Logo",
      },
    ],
  },
  appleWebApp: {
    title: "Freyza",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${nunitoSans.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
