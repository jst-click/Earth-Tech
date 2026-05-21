import { Link } from 'react-router-dom'
import { ALL_SERVICES, getServicePath } from '../data/services'
import { NAV_LINKS, SITE } from '../data/site'
import PhoneLink from './PhoneLink'
import AddressBlock from './AddressBlock'
import GstBadge from './GstBadge'
import Logo from './Logo'
import './Footer.css'
import './Logo.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Logo className="footer__logo" height={72} />
            <h3>{SITE.name}</h3>
            <p>
              Leaders in land surveying, revenue services, geotechnics, DGPS, LiDAR,
              cadastral mapping, and quantity surveying.
            </p>
            <p className="footer__gst">
              <GstBadge />
            </p>
            <div className="footer__phones">
              <PhoneLink />
            </div>
          </div>

          <div>
            <h4>Our Services</h4>
            <ul>
              {ALL_SERVICES.map((s) => (
                <li key={s.id}>
                  <Link to={getServicePath(s.id)}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Useful Links</h4>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Office Address</h4>
            <AddressBlock />
            <p className="footer__email">
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            Copyright © {new Date().getFullYear()} {SITE.name}. All Rights Reserved. |{' '}
            <GstBadge />
          </p>
        </div>
      </div>
    </footer>
  )
}
