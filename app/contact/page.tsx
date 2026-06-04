import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Contact Us | Salt & Steak' }

export default function ContactPage() {
  return (
    <div className="reservations-page">
      <div className="reservations-content">
        <h1>Contact Us</h1>
        <p>8851 120 Street, Delta, BC, Canada V4C 6R6</p>
        <div style={{ marginTop: '32px', color: '#aaa', lineHeight: 2 }}>
          <p>📍 <a href="https://maps.app.goo.gl/spgJSTCU4fjLzCpt7" target="_blank" rel="noreferrer" style={{color:'#1A7FBF'}}>Get Directions</a></p>
          <p>🕓 Monday – Sunday: 4 PM – 12 AM</p>
          <p>🍳 Weekend Brunch: Sat & Sun 12 PM – 4 PM</p>
          <p>🎉 Happy Hour: Mon – Fri 9 PM – 11 PM</p>
        </div>
      </div>
    </div>
  )
}
