import Image from 'next/image'
import Link from 'next/link'

interface FeatureSectionProps {
  title: string
  subtitle?: string
  description: string
  imageSrc: string
  imageAlt: string
  imagePosition?: 'left' | 'right'
}

export default function FeatureSection({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  imagePosition = 'right',
}: FeatureSectionProps) {
  const textReveal = imagePosition === 'right' ? 'reveal-left' : 'reveal-right'
  const imageReveal = imagePosition === 'right' ? 'reveal-right' : 'reveal-left'

  const textBlock = (
    <div className={`feature-text ${textReveal}`}>
      <h2>{title}</h2>
      {subtitle && <p className="subtitle">{subtitle}</p>}
      <p>{description}</p>
      <Link href="/reservations" className="btn-reserve">Table Reservation</Link>
    </div>
  )

  const imageBlock = (
    <div className={`feature-image ${imageReveal}`}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        style={{ objectFit: 'cover' }}
        sizes="(max-width: 900px) 100vw, 50vw"
      />
    </div>
  )

  return (
    <section className="feature-section">
      {imagePosition === 'right' ? (
        <>{textBlock}{imageBlock}</>
      ) : (
        <>{imageBlock}{textBlock}</>
      )}
    </section>
  )
}
