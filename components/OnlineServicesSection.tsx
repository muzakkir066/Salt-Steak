import Link from 'next/link'

export default function OnlineServicesSection() {
  return (
    <section className="online-services">
      <span className="os-badge">Now Available Online</span>

      <h2 className="os-heading">Order &amp; Reserve From Anywhere</h2>
      <p className="os-sub">
        Enjoy Salt &amp; Steak at home or secure your table — it takes less than a minute.
      </p>

      <div className="os-cards">
        {/* Order Online */}
        <div className="os-card">
          <div className="os-card-icon">🍽</div>
          <h3>Order Online</h3>
          <p>
            Browse our full menu — Dinner, Drinks, Happy Hour, Brunch &amp;
            Signature Exclusives. Order for pickup or delivery, anytime.
          </p>
          <Link href="/menus" className="os-btn os-btn--gold">
            Order Now
            <ArrowRight />
          </Link>
        </div>

        <div className="os-divider" aria-hidden="true" />

        {/* Reserve */}
        <div className="os-card">
          <div className="os-card-icon">📅</div>
          <h3>Reserve a Table</h3>
          <p>
            Book for intimate dinners, group celebrations, or weekend brunch.
            Available 7 days a week, 4 PM – 12 AM.
          </p>
          <Link href="/reservations" className="os-btn os-btn--outline">
            Reserve Now
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ArrowRight() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
