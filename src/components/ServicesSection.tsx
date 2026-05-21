import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { REVENUE_SERVICES, SURVEY_SERVICES } from '../data/services'
import ServiceCard from './ServiceCard'
import './ServicesSection.css'

type Props = {
  showAll?: boolean
}

export default function ServicesSection({ showAll = false }: Props) {
  const revenueList = showAll ? REVENUE_SERVICES : REVENUE_SERVICES
  const surveyList = SURVEY_SERVICES

  return (
    <section className="section section-alt services-section" id="services">
      <div className="container">
        <div className="services-section__header">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">Land Surveying & Revenue Services</h2>
          <p className="section-subtitle">
            Comprehensive surveying and revenue land services for government and private sector projects.
          </p>
        </div>

        <div className="services-category">
          <h3 className="services-category__title">
            <FaStar className="services-category__star" aria-hidden /> REVENUE SERVICES
          </h3>
          <div className="grid-4 services-grid">
            {revenueList.map((service) => (
              <ServiceCard key={service.id} service={service} variant="revenue" />
            ))}
          </div>
        </div>

        <div className="services-category">
          <h3 className="services-category__title">
            <FaStar className="services-category__star" aria-hidden /> SURVEYING SERVICES
          </h3>
          <div className="grid-3 services-grid">
            {surveyList.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {!showAll && (
          <div className="services-section__cta">
            <p>Explore detailed information on all of our services</p>
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
