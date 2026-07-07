'use client'
import { useState, useEffect, useRef } from 'react'

interface Props {
  src: string
  title: string
  variant: 'menu' | 'reservation'
  allow?: string
}

export default function EmbedFrame({
  src,
  title,
  variant,
  allow = 'payment; geolocation',
}: Props) {
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    timerRef.current = setTimeout(() => setStatus('error'), 20000)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [])

  return (
    <div className="embed-frame">
      {status === 'loading' && (
        variant === 'menu' ? <MenuSkeleton /> : <ReservationSkeleton />
      )}
      {status === 'error' && (
        <EmbedError onRetry={() => { setStatus('loading'); window.location.reload() }} />
      )}
      <iframe
        src={src}
        title={title}
        allow={allow}
        loading="eager"
        referrerPolicy="strict-origin-when-cross-origin"
        className={`embed-iframe${status === 'ready' ? ' embed-iframe--visible' : ''}`}
        onLoad={() => {
          if (timerRef.current) clearTimeout(timerRef.current)
          setStatus('ready')
        }}
      />
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   Menu Skeleton — category tabs + food cards grid
───────────────────────────────────────────────────────── */
function MenuSkeleton() {
  return (
    <div className="embed-skeleton" aria-label="Loading menu…" aria-busy="true">
      {/* Search bar */}
      <div className="msk-search">
        <div className="sk-shimmer" style={{ height: 44, borderRadius: 8 }} />
      </div>

      {/* Category tabs */}
      <div className="msk-tabs">
        {[72, 88, 64, 96, 80, 68].map((w, i) => (
          <div
            key={i}
            className="msk-tab sk-shimmer"
            style={{ width: w, animationDelay: `${i * 0.08}s` }}
          />
        ))}
      </div>

      {/* Section heading */}
      <div className="msk-section-label">
        <div className="sk-shimmer" style={{ width: 140, height: 14, borderRadius: 4 }} />
      </div>

      {/* Cards grid */}
      <div className="msk-grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="msk-card" style={{ animationDelay: `${i * 0.07}s` }}>
            <div className="msk-card-img sk-shimmer" />
            <div className="msk-card-body">
              <div className="sk-shimmer" style={{ height: 14, width: '80%', borderRadius: 4, marginBottom: 6 }} />
              <div className="sk-shimmer" style={{ height: 11, width: '60%', borderRadius: 4, marginBottom: 4 }} />
              <div className="sk-shimmer" style={{ height: 11, width: '45%', borderRadius: 4, marginBottom: 12 }} />
              <div className="msk-card-footer">
                <div className="sk-shimmer" style={{ height: 16, width: 48, borderRadius: 4 }} />
                <div className="msk-add-btn sk-shimmer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   Reservation Skeleton — booking form fields
───────────────────────────────────────────────────────── */
function ReservationSkeleton() {
  return (
    <div className="embed-skeleton rsk-skeleton" aria-label="Loading reservation form…" aria-busy="true">
      {/* Heading */}
      <div className="rsk-heading">
        <div className="sk-shimmer" style={{ height: 28, width: 200, borderRadius: 6, marginBottom: 8 }} />
        <div className="sk-shimmer" style={{ height: 13, width: 280, borderRadius: 4 }} />
      </div>

      {/* Date + Time row */}
      <div className="rsk-row">
        <div className="rsk-field">
          <div className="rsk-label sk-shimmer" />
          <div className="rsk-input sk-shimmer" />
        </div>
        <div className="rsk-field">
          <div className="rsk-label sk-shimmer" />
          <div className="rsk-input sk-shimmer" />
        </div>
      </div>

      {/* Guest count */}
      <div className="rsk-field-full">
        <div className="rsk-label sk-shimmer" style={{ width: 80 }} />
        <div className="rsk-guests">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="rsk-guest-chip sk-shimmer" style={{ animationDelay: `${i * 0.05}s` }} />
          ))}
        </div>
      </div>

      {/* Name */}
      <div className="rsk-field-full">
        <div className="rsk-label sk-shimmer" style={{ width: 70 }} />
        <div className="rsk-input sk-shimmer" />
      </div>

      {/* Email + Phone row */}
      <div className="rsk-row">
        <div className="rsk-field">
          <div className="rsk-label sk-shimmer" />
          <div className="rsk-input sk-shimmer" />
        </div>
        <div className="rsk-field">
          <div className="rsk-label sk-shimmer" />
          <div className="rsk-input sk-shimmer" />
        </div>
      </div>

      {/* Special requests */}
      <div className="rsk-field-full">
        <div className="rsk-label sk-shimmer" style={{ width: 130 }} />
        <div className="rsk-textarea sk-shimmer" />
      </div>

      {/* Submit button */}
      <div className="rsk-submit sk-shimmer" />
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   Error state
───────────────────────────────────────────────────────── */
function EmbedError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="embed-error" role="alert">
      <span className="embed-error-icon">⚠</span>
      <h3>Temporarily Unavailable</h3>
      <p>Our online system is having trouble loading.</p>
      <p>You can still reach us directly:</p>
      <a href="tel:+16042599199" className="embed-error-phone">+1 (604) 259-9199</a>
      <a
        href="https://maps.app.goo.gl/spgJSTCU4fjLzCpt7"
        target="_blank"
        rel="noreferrer"
        className="embed-error-address"
      >
        📍 8851 120 Street, Delta, BC
      </a>
      <button className="btn-outline embed-error-retry" onClick={onRetry}>
        Try Again
      </button>
    </div>
  )
}
