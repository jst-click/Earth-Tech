import { Link, Navigate, useParams } from 'react-router-dom'
import ContactCTA from '../components/ContactCTA'
import PageBanner from '../components/PageBanner'
import { FaCheck } from 'react-icons/fa'
import { ALL_SERVICES, getServiceById, getServicePath } from '../data/services'
import AddressBlock from '../components/AddressBlock'
import GstBadge from '../components/GstBadge'
import ServiceIcon from '../components/icons/ServiceIcon'
import PhoneLink from '../components/PhoneLink'
import SiteImage from '../components/SiteImage'
import { getServiceImage } from '../data/images'
import './ServiceDetail.css'

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>()

  if (serviceId === 'adbastu') {
    return <Navigate to="/services/hadbastu" replace />
  }

  const service = serviceId ? getServiceById(serviceId) : undefined

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const related = ALL_SERVICES.filter(
    (s) => s.category === service.category && s.id !== service.id,
  ).slice(0, 4)

  const categoryLabel =
    service.category === 'revenue' ? 'Revenue Services' : 'Surveying Services'

  return (
    <>
      <PageBanner
        title={service.title}
        subtitle={categoryLabel}
        image={getServiceImage(service.id)}
      />

      <section className="section service-detail">
        <div className="container service-detail__grid">
          <div className="service-detail__main">
            <div className="service-detail__hero-img">
              <SiteImage
                src={getServiceImage(service.id)}
                alt={`${service.title} — field survey and engineering`}
                className="service-detail__photo"
              />
            </div>
            <div className="service-detail__intro">
              <ServiceIcon id={service.id} size={56} className="service-detail__icon" />
              <p className="service-detail__overview">{service.overview}</p>
            </div>

            <div className="service-detail__block">
              <h2>Key Features</h2>
              <ul className="service-detail__list">
                {service.features.map((item) => (
                  <li key={item}>
                    <FaCheck className="service-detail__check" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="service-detail__block">
              <h2>Our Process</h2>
              <ol className="service-detail__steps">
                {service.process.map((step, index) => (
                  <li key={step}>
                    <span className="service-detail__step-num">{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="service-detail__block">
              <h2>Applications</h2>
              <div className="service-detail__tags">
                {service.applications.map((app) => (
                  <span key={app} className="service-detail__tag">
                    {app}
                  </span>
                ))}
              </div>
            </div>

            <div className="service-detail__actions">
              <Link to="/contact" className="btn btn-primary">
                Request a Quote
              </Link>
              <Link to="/services" className="btn btn-dark">
                All Services
              </Link>
            </div>
          </div>

          <aside className="service-detail__sidebar">
            <div className="service-detail__card">
              <h3>Service Category</h3>
              <p>{categoryLabel}</p>
            </div>
            <div className="service-detail__card">
              <h3>Need Help?</h3>
              <p>Contact our team for a detailed quote and timeline for {service.title}.</p>
              <div className="service-detail__contact-meta">
                <GstBadge />
                <AddressBlock />
                <PhoneLink className="service-detail__phone" />
              </div>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                Contact Us
              </Link>
            </div>
            {related.length > 0 && (
              <div className="service-detail__card">
                <h3>Related Services</h3>
                <ul className="service-detail__related">
                  {related.map((s) => (
                    <li key={s.id}>
                      <Link to={getServicePath(s.id)}>
                        <ServiceIcon id={s.id} size={16} /> {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
