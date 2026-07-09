import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="hero">
      <Image
        src="https://static.wixstatic.com/media/d0f8bb_a4272eb7474141dea7273257ef0d290b~mv2.jpg/v1/fill/w_1526,h_766,fp_0.50_0.37,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC08679-Enhanced-NR_JPG.jpg"
        alt="Salt & Steak Restaurant Interior – Moon Lamp"
        fill
        style={{ objectFit: 'cover', objectPosition: '50% 37%' }}
        priority
      />
      <div className="hero-overlay" />

      {/* Floating award badge — top right */}
      <div className="hero-award" aria-label="Best Halal Fine Dining 2025">
        <span className="hero-award-star">★</span>
        <div>
          <p className="hero-award-title">Best Halal Fine Dining</p>
          <p className="hero-award-sub">Vancouver · 2025</p>
        </div>
      </div>

      {/* Main hero content */}
      <div className="hero-content">
        <p className="hero-eyebrow">Halal Fine Dining &nbsp;·&nbsp; Delta, BC</p>

        <h1 className="hero-title">
          Premium<br />
          <em>Halal</em><br />
          Dining
        </h1>

        <p className="hero-subtitle">
          Crafted with care. Served with pride. Inspired by culture.
        </p>

        <div className="hero-buttons">
          <Link href="/menus" className="btn-gold">Order Online</Link>
          <Link href="/reservations" className="btn-outline">Reserve a Table</Link>
        </div>

        {/* Stats strip */}
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-value">4.9★</span>
            <span className="hero-stat-label">Google Rating</span>
          </div>
          <div className="hero-stat-sep" />
          <div className="hero-stat">
            <span className="hero-stat-value">7</span>
            <span className="hero-stat-label">Days a Week</span>
          </div>
          <div className="hero-stat-sep" />
          <div className="hero-stat">
            <span className="hero-stat-value">100%</span>
            <span className="hero-stat-label">Halal Certified</span>
          </div>
          <div className="hero-stat-sep" />
          <div className="hero-stat">
            <span className="hero-stat-value">2025</span>
            <span className="hero-stat-label">Award Winner</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll" aria-hidden="true">
        <span className="hero-scroll-label">Scroll</span>
        <svg className="hero-scroll-chevron" width="20" height="20" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  )
}
