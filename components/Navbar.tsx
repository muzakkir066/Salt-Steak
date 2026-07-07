'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Order Online', href: '/menus' },
  { label: 'Reservations', href: '/reservations' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blogs', href: '/blog' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Close drawer on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Shrink navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}>
        {/* Logo */}
        <Link href="/" className="navbar-logo" onClick={() => setMobileOpen(false)}>
          <Image
            src="https://static.wixstatic.com/media/d0f8bb_108360aa54fc408fabd9d317c06802ce~mv2.png/v1/crop/x_0,y_449,w_1080,h_182/fill/w_382,h_64,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(75).png"
            alt="Salt & Steak Logo"
            width={191}
            height={32}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation">
          <ul className="navbar-links">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? 'nav-link nav-active' : 'nav-link'}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side */}
        <div className="navbar-right">
          <Link href="/menus" className="btn-order-nav">
            Order Online
          </Link>
          <Link href="/reservations" className="btn-reserve-nav">
            Reserve
          </Link>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(prev => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span className={`hamburger${mobileOpen ? ' open' : ''}`}>
              <span /><span /><span />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer${mobileOpen ? ' drawer-open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <nav className="mobile-nav">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-nav-link${pathname === link.href ? ' mobile-nav-active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-drawer-actions">
          <Link href="/menus" className="btn-outline mobile-action-btn mobile-action-btn--gold">
            🍽 Order Online
          </Link>
          <Link href="/reservations" className="btn-outline mobile-action-btn">
            📅 Reserve a Table
          </Link>
        </div>
        <p className="mobile-drawer-hours">Mon – Sun &nbsp;|&nbsp; 4 PM – 12 AM</p>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="drawer-overlay"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
