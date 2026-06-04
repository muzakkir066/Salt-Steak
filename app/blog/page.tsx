import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Blog | Salt & Steak' }

export default function BlogPage() {
  return (
    <div className="reservations-page">
      <div className="reservations-content">
        <h1>Blog</h1>
        <p>Stories, recipes, and news from Salt & Steak.</p>
        <p style={{ color: '#888', marginTop: '16px' }}>
          Add your blog posts here.
        </p>
      </div>
    </div>
  )
}
