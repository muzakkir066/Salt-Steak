interface VideoSectionProps {
  src: string
  poster?: string
  height?: string
}

export default function VideoSection({ src, poster, height = '500px' }: VideoSectionProps) {
  return (
    <section className="video-section" style={{ height }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </section>
  )
}
