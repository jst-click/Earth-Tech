import { Link } from 'react-router-dom'
import { FaChartBar, FaTools } from 'react-icons/fa'
import { IMAGES } from '../data/images'
import { SITE } from '../data/site'
import SiteImage from './SiteImage'
import './AboutSection.css'

export default function AboutSection() {
  return (
    <section className="section about-section">
      <div className="container about-section__grid">
        <div className="about-section__visual">
          <div className="about-section__images">
            <div className="about-section__bg-wrap">
              <SiteImage
                src={IMAGES.about.background}
                alt="Aerial view of land development and building survey project"
                className="about-section__bg"
              />
            </div>
            <div className="about-section__overlay-wrap">
              <SiteImage
                src={IMAGES.about.surveyor}
                alt="Land surveyor with total station on site"
                className="about-section__overlay"
              />
            </div>
          </div>
        </div>
        <div className="about-section__content">
          <span className="section-label">Land Surveyor</span>
          <h2 className="section-title">{SITE.name}</h2>
          <h3 className="about-section__heading">Your Trusted Survey Partner</h3>
          <p>
            {SITE.name} is a well-qualified and professionally managed surveying company serving
            the civil engineering industry. We provide top-quality
            land surveying, revenue services, geotechnical investigation, and related engineering
            solutions.
          </p>
          <p>
            We have extensive experience working on diverse land surveying and geotechnical civil
            engineering projects for both government and private sectors. Our services include
            topographical surveys, revenue land services (Adbastu, 11E Sketch, Tatkal Podi,
            Alination), DGPS, LiDAR, cadastral mapping, alignment surveys, and quantity surveying.
          </p>
          <div className="about-section__features">
            <div className="about-feature">
              <div className="about-feature__icon">
                <FaChartBar size={28} aria-hidden />
              </div>
              <div>
                <h4>Extensive Experience</h4>
                <p>Over 29 years of expertise in diverse land and geotechnical projects.</p>
              </div>
            </div>
            <div className="about-feature">
              <div className="about-feature__icon">
                <FaTools size={28} aria-hidden />
              </div>
              <div>
                <h4>Full Services</h4>
                <p>From revenue services to LiDAR, DGPS, and quantity surveying.</p>
              </div>
            </div>
          </div>
          <Link to="/about" className="btn btn-dark">
            Know More
          </Link>
        </div>
      </div>
    </section>
  )
}
