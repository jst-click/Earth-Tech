import { Link } from 'react-router-dom'
import type { ServiceItem } from '../data/services'
import { getServicePath } from '../data/services'
import { getServiceImage } from '../data/images'
import ServiceIcon from './icons/ServiceIcon'
import SiteImage from './SiteImage'
import './ServicesSection.css'

type Props = {
  service: ServiceItem
  variant?: 'revenue' | 'survey'
}

export default function ServiceCard({ service, variant }: Props) {
  const cardClass =
    variant === 'revenue' || service.category === 'revenue'
      ? 'service-card service-card--revenue'
      : 'service-card'

  return (
    <Link to={getServicePath(service.id)} className={`${cardClass} service-card--link`}>
      <div className="service-card__media">
        <SiteImage
          src={getServiceImage(service.id)}
          alt={`${service.title} — Earth Tech Survey`}
          className="service-card__img"
        />
        <span className="service-card__icon-badge">
          <ServiceIcon id={service.id} size={22} />
        </span>
      </div>
      <div className="service-card__body">
        <h4>{service.title}</h4>
        <p>{service.description}</p>
        <span className="service-card__more">Learn More →</span>
      </div>
    </Link>
  )
}
