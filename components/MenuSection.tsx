import { MenuSection as MenuSectionType } from '@/data/menuData'

export default function MenuSection({ section }: { section: MenuSectionType }) {
  return (
    <div className="menu-section">
      <h3 className="menu-section-title">{section.title}</h3>
      {section.subtitle && (
        <p className="menu-section-subtitle">{section.subtitle}</p>
      )}
      <hr className="menu-section-divider" />
      {section.items.map((item, i) => (
        <div key={i} className="menu-item">
          {item.variants ? (
            <>
              <div className="menu-item-row">
                <span className="menu-item-name">{item.name}</span>
              </div>
              {item.desc && <p className="menu-item-desc">{item.desc}</p>}
              {item.variants.map(v => (
                <div key={v.label} className="menu-variant-row">
                  <span className="menu-variant-label">{v.label}</span>
                  <span className="menu-variant-price">{v.price}</span>
                </div>
              ))}
            </>
          ) : (
            <>
              <div className="menu-item-row">
                <span className="menu-item-name">{item.name}</span>
                {item.price && <span className="menu-item-price">{item.price}</span>}
              </div>
              {item.desc && <p className="menu-item-desc">{item.desc}</p>}
            </>
          )}
          <hr className="menu-item-divider" />
        </div>
      ))}
    </div>
  )
}
