import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="hero">
      <Image
        src="https://static.wixstatic.com/media/d0f8bb_a4272eb7474141dea7273257ef0d290b~mv2.jpg/v1/fill/w_1526,h_766,fp_0.50_0.37,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC08679-Enhanced-NR_JPG.jpg"
        alt="Salt & Steak Restaurant Interior – Moon Lamp"
        fill
        style={{ objectFit: 'cover', objectPosition: '50% 37%' }}
        priority
      />
      <div className="hero-overlay" />
      <div className="hero-buttons">
        <Link href="/menus" className="btn-outline">ORDER ONLINE</Link>
        <Link href="/reservations" className="btn-outline">RESERVE A TABLE</Link>
      </div>
    </section>
  )
}
