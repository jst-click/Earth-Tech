import { WHY_US_ITEMS } from '../data/services'
import { SITE } from '../data/site'
import './WhyUsSection.css'

export default function WhyUsSection() {
  return (
    <section className="section why-section">
      <div className="container">
        <div className="why-section__header">
          <span className="section-label">Why {SITE.name}?</span>
          <h2 className="section-title">Our Expertise & Services</h2>
          <p className="section-subtitle">
            Earth Tech Survey plays a crucial role in mapping and measuring land accurately. Using
            advanced tools and techniques, we ensure precise results across all surveying disciplines.
          </p>
        </div>
        <div className="grid-3">
          {WHY_US_ITEMS.map((item) => (
            <article key={item.title} className="why-card">
              <div className="why-card__line" />
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
