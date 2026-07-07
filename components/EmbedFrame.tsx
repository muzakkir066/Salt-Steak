'use client'
import { useState, useEffect, useRef } from 'react'

interface Props {
  src: string
  title: string
  allow?: string
}

export default function EmbedFrame({
  src,
  title,
  allow = 'payment; geolocation',
}: Props) {
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    // Show error if widget hasn't loaded within 20 s
    timerRef.current = setTimeout(() => setStatus('error'), 20000)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  return (
    <div className="embed-frame">
      {status === 'loading' && <EmbedSkeleton />}
      {status === 'error'   && <EmbedError onRetry={() => { setStatus('loading'); window.location.reload() }} />}

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

/* ── Skeleton ──────────────────────────────────────────── */
function EmbedSkeleton() {
  return (
    <div className="embed-skeleton" aria-label="Loading…" aria-busy="true">
      <div className="sk-header">
        <div className="sk-line sk-line--50" />
        <div className="sk-line sk-line--30" />
      </div>

      <div className="sk-tabs">
        {[80, 90, 70, 95, 60].map((w, i) => (
          <div key={i} className="sk-tab" style={{ width: w }} />
        ))}
      </div>

      <div className="sk-items">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="sk-item">
            <div className="sk-thumb" />
            <div className="sk-item-body">
              <div className="sk-line sk-line--65" />
              <div className="sk-line sk-line--45" />
              <div className="sk-line sk-line--25" />
            </div>
            <div className="sk-price" />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Error ─────────────────────────────────────────────── */
function EmbedError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="embed-error" role="alert">
      <span className="embed-error-icon">⚠</span>
      <h3>Temporarily Unavailable</h3>
      <p>Our online system is having trouble loading.</p>
      <p>You can still reach us directly:</p>
      <a href="tel:+16042599199" className="embed-error-phone">
        +1 (604) 259-9199
      </a>
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
