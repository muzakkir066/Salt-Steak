'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Reservations', href: '/reservations' },
  { label: 'Menu', href: '/menus' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blogs', href: '/blog' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <header className="navbar">
        <Link href="/" className="navbar-logo">
          <Image
            src="https://static.wixstatic.com/media/d0f8bb_108360aa54fc408fabd9d317c06802ce~mv2.png/v1/crop/x_0,y_449,w_1080,h_182/fill/w_382,h_64,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(75).png"
            alt="Salt & Steak Logo"
            width={191}
            height={32}
            priority
          />
        </Link>

        <nav>
          <ul className="navbar-links">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{ fontWeight: pathname === link.href ? 700 : 400 }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', top: '72px', left: 0, right: 0, bottom: 0,
          background: '#000', zIndex: 999, padding: '32px 24px',
          display: 'flex', flexDirection: 'column', gap: '24px',
        }}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              style={{ color: '#fff', fontSize: '22px', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.08em' }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
