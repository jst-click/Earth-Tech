import PageBanner from '../components/PageBanner'
import SiteImage from '../components/SiteImage'
import ContactCTA from '../components/ContactCTA'
import { GALLERY_ITEMS } from '../data/gallery'
import { SITE } from '../data/site'
import './Gallery.css'

export default function Gallery() {
  return (
    <>
      <PageBanner
        title="Gallery"
        subtitle={`Credentials & achievements — ${SITE.name}`}
        bannerKey="default"
      />

      <section className="section gallery-page">
        <div className="container">
          <div className="gallery-page__header">
            <span className="section-label">Our Gallery</span>
            <h2 className="section-title">Certificates & Achievements</h2>
            <p className="section-subtitle">
              Recognitions and official credentials that reflect our expertise in land surveying
              and revenue services.
            </p>
          </div>

          <div className="gallery-page__grid">
            {GALLERY_ITEMS.map((item) => (
              <figure key={item.id} className="gallery-page__item">
                <SiteImage
                  src={item.src}
                  alt={item.alt}
                  className="gallery-page__img"
                />
                <figcaption className="gallery-page__caption">
                  <h3>{item.title}</h3>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
