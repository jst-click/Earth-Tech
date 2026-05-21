import { Link } from 'react-router-dom'
import { IMAGES } from '../data/images'
import { SITE, getPhoneTel } from '../data/site'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <img
        src={IMAGES.hero}
        alt="Land surveying and construction site work"
        className="hero__bg"
        fetchPriority="high"
      />
      <div className="hero__overlay" />
      <div className="container hero__content">
        <p className="hero__label">{SITE.tagline}</p>
        <h1 className="hero__title">{SITE.heroTitle}</h1>
        <p className="hero__subtitle">{SITE.heroSubtitle}</p>
        <div className="hero__actions">
          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
          <a href={`tel:${getPhoneTel()}`} className="btn btn-outline">
            Call {SITE.phone}
          </a>
        </div>
      </div>
      <div className="hero__scroll" aria-hidden>
        <span />
      </div>
    </section>
  )
}
