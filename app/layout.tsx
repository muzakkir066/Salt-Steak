import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Salt & Steak | Halal Fine Dining Delta BC',
  description: 'Awarded Best Halal Fine Dining 2025. Certified halal beef, lamb, and chicken. Fine dining in Delta, BC, Canada.',
  keywords: 'halal steak, halal restaurant, fine dining, Delta BC, Salt and Steak',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ScrollReveal />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
