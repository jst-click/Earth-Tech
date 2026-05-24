import { ALL_SERVICES } from '../data/services'
import { getServiceImage } from '../data/images'
import SiteImage from './SiteImage'
import './GallerySection.css'

export default function GallerySection() {
  return (
    <section className="section section-alt gallery-section">
      <div className="container">
        <div className="gallery-section__header">
          <span className="section-label">Image Gallery</span>
          <h2 className="section-title">Land Surveyor — Projects</h2>
        </div>
        <div
          className="gallery-scroll"
          tabIndex={0}
          aria-label="Project gallery — scroll horizontally"
        >
          <div className="gallery-grid">
            {ALL_SERVICES.map((service) => (
              <figure key={service.id} className="gallery-item">
                <SiteImage
                  src={getServiceImage(service.id)}
                  alt={`${service.title} project`}
                  className="gallery-item__img"
                />
                <figcaption className="gallery-item__overlay">
                  <h4>{service.title}</h4>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
