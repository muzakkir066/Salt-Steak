import type { Metadata } from 'next'
import EmbedFrame from '@/components/EmbedFrame'

export const metadata: Metadata = {
  title: 'Order Online | Salt & Steak',
  description: 'Order food online from Salt & Steak — Halal fine dining in Delta, BC.',
}

export default function MenusPage() {
  return (
    <div className="embed-page">
      <EmbedFrame
        src="https://staging.dashboard.spicey.app/widget/sk-6th-road?embed=true"
        title="Online Menu & Ordering — Salt & Steak"
        variant="menu"
        allow="payment; geolocation"
      />
    </div>
  )
}
