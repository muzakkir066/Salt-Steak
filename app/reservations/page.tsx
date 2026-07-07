import type { Metadata } from 'next'
import EmbedFrame from '@/components/EmbedFrame'

export const metadata: Metadata = {
  title: 'Reservations | Salt & Steak',
  description: 'Reserve a table at Salt & Steak — Halal fine dining in Delta, BC.',
}

export default function ReservationsPage() {
  return (
    <div className="embed-page">
      <EmbedFrame
        src="https://staging.dashboard.spicey.app/sk-6th-road/reserve?embed=true"
        title="Reserve a Table — Salt & Steak"
        variant="reservation"
        allow="payment; geolocation"
      />
    </div>
  )
}
