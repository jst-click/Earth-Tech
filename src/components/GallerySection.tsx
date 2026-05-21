import { IMAGES } from '../data/images'
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
        <div className="gallery-grid">
          {IMAGES.gallery.map((project) => (
            <figure key={project.title} className="gallery-item">
              <SiteImage src={project.src} alt={project.alt} className="gallery-item__img" />
              <figcaption className="gallery-item__overlay">
                <h4>{project.title}</h4>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
