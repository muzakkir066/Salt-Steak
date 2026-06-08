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
        title="Reserve a Table at Salt & Steak"
      />
    </div>
  )
}
