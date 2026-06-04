import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Order Online | Salt & Steak',
  description: 'Order food online or reserve a table at Salt & Steak.',
}

export default function MenusPage() {
  return (
    <div className="embed-page">
      <iframe
        src="https://staging.dashboard.spicey.app/widget/salt-steak"
        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '12px' }}
        title="Order from Salt & Steak"
        loading="lazy"
      />
    </div>
  )
}
