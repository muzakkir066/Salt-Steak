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
      {status === 'loading' && <EmbedLoader variant={variant} />}
      {status === 'error'   && (
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

/* ── Themed loader ─────────────────────────────────────── */
function EmbedLoader({ variant }: { variant: 'menu' | 'reservation' }) {
  return (
    <div className="embed-loader" aria-label="Loading…" aria-busy="true">
      <div className="embed-loader-ring">
        <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="28" r="24" stroke="rgba(171,127,10,0.15)" strokeWidth="4" />
          <circle
            cx="28" cy="28" r="24"
            stroke="#AB7F0A"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="38 113"
            className="embed-loader-arc"
          />
        </svg>
      </div>
      <p className="embed-loader-label">
        {variant === 'menu' ? 'Loading Menu…' : 'Loading Reservations…'}
      </p>
    </div>
  )
}

/* ── Error state ───────────────────────────────────────── */
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
