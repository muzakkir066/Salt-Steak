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
  const textBlock = (
    <div className="feature-text">
      <h2>{title}</h2>
      {subtitle && <p className="subtitle">{subtitle}</p>}
      <p>{description}</p>
      <Link href="/reservations" className="btn-reserve">TABLE RESERVATION</Link>
    </div>
  )

  const imageBlock = (
    <div className="feature-image">
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
