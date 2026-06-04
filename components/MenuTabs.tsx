'use client'
import { useState } from 'react'
import { dinnerMenu, drinksMenu, happyHourMenu, brunchMenu, signatureExclusives } from '@/data/menuData'
import MenuSectionComponent from './MenuSection'

const tabs = [
  { key: 'dinner', label: 'Dinner Menu', data: dinnerMenu },
  { key: 'drinks', label: 'Drinks', data: drinksMenu },
  { key: 'happy-hour', label: 'Happy Hour', data: happyHourMenu },
  { key: 'brunch', label: 'Brunch Menu', data: brunchMenu },
  { key: 'signature', label: 'Signature Exclusives', data: signatureExclusives },
]

export default function MenuTabs() {
  const [active, setActive] = useState('dinner')
  const current = tabs.find(t => t.key === active)!

  return (
    <div>
      {/* Tab Bar */}
      <div className="menu-tabs">
        {tabs.map(tab => (
          <button
            key={tab.key}
            className={`menu-tab-btn ${active === tab.key ? 'active' : ''}`}
            onClick={() => setActive(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Title & Meta */}
      <h2 className="menu-title">{current.label}</h2>
      {current.data.hours && (
        <p className="menu-hours">{current.data.hours}</p>
      )}
      {current.data.note && (
        <p className="menu-note">{current.data.note}</p>
      )}
      {current.data.subtitle && (
        <p className="menu-subtitle">{current.data.subtitle}</p>
      )}

      {/* Sections */}
      {current.data.sections.map((section, i) => (
        <MenuSectionComponent key={i} section={section} />
      ))}
    </div>
  )
}
