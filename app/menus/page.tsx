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
        src="https://staging.dashboard.spicey.app/widget/saltandsteak?embed=true"
        title="SaltandSteak — Online Menu"
        variant="menu"
        allow="payment *; geolocation; storage-access"
      />
    </div>
  )
}
