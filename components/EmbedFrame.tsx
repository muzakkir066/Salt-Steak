'use client'
import { useState } from 'react'

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
  const [ready, setReady] = useState(false)
  const [error, setError] = useState(false)

  if (error) {
    return <EmbedError onRetry={() => { setError(false); window.location.reload() }} />
  }

  return (
    <iframe
      src={src}
      title={title}
      allow={allow}
      loading="eager"
      referrerPolicy="strict-origin-when-cross-origin"
      className={`embed-iframe${ready ? ' embed-iframe--visible' : ''}`}
      onLoad={() => setReady(true)}
      onError={() => setError(true)}
    />
  )
}

function EmbedError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="embed-error" role="alert">
      <span className="embed-error-icon">⚠</span>
      <h3>Temporarily Unavailable</h3>
      <p>Our online system is having trouble loading.</p>
      <p>Please reach us directly:</p>
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
