import { TESTIMONIALS } from '../data/team'
import { StarRating } from './icons/StarIcon'
import './TestimonialsSection.css'

export default function TestimonialsSection() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="testimonials-section__header">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Our Clients Say About Us</h2>
        </div>
        <div className="grid-2">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.name} className="testimonial-card">
              <StarRating count={t.rating} size={16} className="testimonial-card__stars" />
              <p>"{t.text}"</p>
              <footer>
                <strong>{t.name}</strong>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
