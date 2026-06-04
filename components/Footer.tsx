import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Reservations', href: '/reservations' },
  { label: 'Menu', href: '/menus' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blogs', href: '/blog' },
  { label: 'About', href: '/about' },
]

export default function Footer() {
  return (
    <footer className="footer">
      {/* Left – Logo + Address */}
      <div className="footer-left">
        <Image
          src="https://static.wixstatic.com/media/d0f8bb_108360aa54fc408fabd9d317c06802ce~mv2.png/v1/crop/x_0,y_449,w_1080,h_182/fill/w_382,h_64,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(75).png"
          alt="Salt & Steak Logo"
          width={191}
          height={32}
          className="footer-logo"
        />
        <a
          href="https://maps.app.goo.gl/spgJSTCU4fjLzCpt7"
          target="_blank"
          rel="noreferrer"
          className="footer-address"
        >
          8851 120 Street Delta<br />CANADA BC, V4C 6R6
        </a>
      </div>

      {/* Right – Nav + Gratuity */}
      <div className="footer-right">
        <nav className="footer-nav">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </nav>
        <p className="footer-gratuity">18% gratuity is applied for groups of 6 or more</p>
      </div>
    </footer>
  )
}
