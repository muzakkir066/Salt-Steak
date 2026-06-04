import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reservations | Salt & Steak',
  description: 'Reserve a table or order online at Salt & Steak.',
}

export default function ReservationsPage() {
  return (
    <div className="embed-page">
      <iframe
        src="https://staging.dashboard.spicey.app/widget/salt-steak"
        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '12px' }}
        title="Reserve a Table at Salt & Steak"
        loading="lazy"
      />
    </div>
  )
}
