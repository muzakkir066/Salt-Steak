import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = { title: 'About | Salt & Steak' }

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ position: 'relative', height: '500px' }}>
        <Image
          src="https://static.wixstatic.com/media/d0f8bb_a4272eb7474141dea7273257ef0d290b~mv2.jpg/v1/fill/w_1526,h_766,fp_0.50_0.37,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC08679-Enhanced-NR_JPG.jpg"
          alt="Salt & Steak Restaurant"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ fontSize: '60px', color: '#fff', fontFamily: 'Oswald, sans-serif', textAlign: 'center' }}>About Salt & Steak</h1>
        </div>
      </section>

      <section style={{ background: '#000', padding: '80px 120px', maxWidth: '900px', margin: '0 auto' }}>
        <p style={{ fontSize: '18px', fontStyle: 'italic', color: '#ddd', lineHeight: 1.8, marginBottom: '32px' }}>
          Salt & Steak is Delta, BC&apos;s premier halal fine dining destination. Awarded Best Halal Fine Dining Restaurant
          in Vancouver for 2025, we pride ourselves on serving certified halal beef, lamb, and chicken expertly seasoned
          and grilled to perfection.
        </p>
        <p style={{ fontSize: '18px', fontStyle: 'italic', color: '#ddd', lineHeight: 1.8 }}>
          Our chefs blend traditional steakhouse techniques with innovative flavors and Middle Eastern culinary traditions —
          from our signature New York Strip to our authentic Yemeni Lamb Mandi — creating an unforgettable dining experience
          for every guest.
        </p>
      </section>
    </div>
  )
}
