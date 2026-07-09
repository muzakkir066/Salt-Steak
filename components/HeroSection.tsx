'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const PARTICLES = [
  { left: '7%',  top: '22%', size: 3, dur: '4s',   delay: '0s'   },
  { left: '14%', top: '58%', size: 2, dur: '5s',   delay: '0.6s' },
  { left: '24%', top: '36%', size: 2, dur: '3.8s', delay: '1.1s' },
  { left: '38%', top: '78%', size: 3, dur: '6s',   delay: '0.3s' },
  { left: '52%', top: '14%', size: 2, dur: '4.6s', delay: '0.9s' },
  { left: '63%', top: '52%', size: 4, dur: '5.2s', delay: '1.6s' },
  { left: '74%', top: '82%', size: 2, dur: '4.1s', delay: '0.4s' },
  { left: '83%', top: '28%', size: 3, dur: '3.4s', delay: '0.7s' },
  { left: '91%', top: '67%', size: 2, dur: '5.5s', delay: '1.3s' },
  { left: '29%', top: '90%', size: 2, dur: '4.8s', delay: '1.0s' },
  { left: '69%', top: '42%', size: 3, dur: '3.6s', delay: '0.5s' },
  { left: '48%', top: '60%', size: 2, dur: '6.2s', delay: '1.9s' },
]

function CountUp({ to, suffix = '', delay = 1400 }: { to: number; suffix?: string; delay?: number }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const steps = 36
      const duration = 1400
      let step = 0
      const timer = setInterval(() => {
        step++
        setValue(Math.min(to, Math.round((to / steps) * step)))
        if (step >= steps) clearInterval(timer)
      }, duration / steps)
      return () => clearInterval(timer)
    }, delay)
    return () => clearTimeout(timeout)
  }, [to, delay])

  return <>{value}{suffix}</>
}

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const parallaxY = Math.round(scrollY * 0.38)

  return (
    <section className="hero">
      {/* Parallax background */}
      <div className="hero-bg" style={{ transform: `translateY(${parallaxY}px)` }}>
        <Image
          src="https://static.wixstatic.com/media/d0f8bb_a4272eb7474141dea7273257ef0d290b~mv2.jpg/v1/fill/w_1526,h_766,fp_0.50_0.37,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC08679-Enhanced-NR_JPG.jpg"
          alt="Salt & Steak Restaurant Interior – Moon Lamp"
          fill
          style={{ objectFit: 'cover', objectPosition: '50% 37%' }}
          priority
        />
      </div>

      <div className="hero-overlay" />

      {/* Floating gold particles */}
      <div className="hero-particles" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="hero-particle"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDuration: p.dur,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Award badge */}
      <div className="hero-award" aria-label="Best Halal Fine Dining 2025">
        <span className="hero-award-star">★</span>
        <div>
          <p className="hero-award-title">Best Halal Fine Dining</p>
          <p className="hero-award-sub">Vancouver · 2025</p>
        </div>
      </div>

      {/* Main content */}
      <div className="hero-content">
        <p className="hero-eyebrow">Halal Fine Dining &nbsp;·&nbsp; Delta, BC</p>
        <div className="hero-divider" aria-hidden="true" />

        <h1 className="hero-title">
          Order Online,<br />
          <em>or Dine In —</em><br />
          Your Choice.
        </h1>

        <p className="hero-subtitle">
          Your cravings, our craft — online or right here.
        </p>

        <div className="hero-buttons">
          <Link href="/menus" className="btn-gold">Order Online</Link>
          <Link href="/reservations" className="btn-outline">Reserve a Table</Link>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-value">
              <CountUp to={4} suffix=".9★" delay={1300} />
            </span>
            <span className="hero-stat-label">Google Rating</span>
          </div>
          <div className="hero-stat-sep" />
          <div className="hero-stat">
            <span className="hero-stat-value">
              <CountUp to={7} suffix="" delay={1450} />
            </span>
            <span className="hero-stat-label">Days a Week</span>
          </div>
          <div className="hero-stat-sep" />
          <div className="hero-stat">
            <span className="hero-stat-value">
              <CountUp to={100} suffix="%" delay={1600} />
            </span>
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
