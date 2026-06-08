import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reservations | Salt & Steak',
  description: 'Reserve a table or order online at Salt & Steak.',
}

export default function ReservationsPage() {
  return (
    <div className="embed-page">
      <iframe
        src="https://staging.dashboard.spicey.app/sk-6th-road/reserve"
        width="100%"
        height="700"
        frameBorder="0"
        style={{ border: 'none', borderRadius: '12px', overflow: 'hidden' }}
      />
    </div>
  )
}
