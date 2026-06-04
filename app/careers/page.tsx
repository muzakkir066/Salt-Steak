import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Careers | Salt & Steak' }

export default function CareersPage() {
  return (
    <div className="reservations-page">
      <div className="reservations-content">
        <h1>Careers</h1>
        <p>Join our award-winning team at Salt & Steak.</p>
        <p style={{ color: '#888', marginTop: '16px' }}>
          Add your job listings or application form here.
        </p>
      </div>
    </div>
  )
}
