import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Order Online | Salt & Steak',
  description: 'Order food online or reserve a table at Salt & Steak.',
}

export default function MenusPage() {
  return (
    <div className="embed-page">
      <iframe
        src="https://staging.dashboard.spicey.app/widget/sk-6th-road"
        title="SK-6th-road — Online Menu"
      />
    </div>
  )
}
