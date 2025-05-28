import type { Metadata } from "next"
import { Lora, Nunito_Sans } from "next/font/google"
import "./globals.css"

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
})

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Freyza Cosmeceuticals Private Limited",
  description: "FREYZA COSMECEUTICALS PRIVATE LIMITED",
  appleWebApp: {
    title: "Freyza"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${nunitoSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
