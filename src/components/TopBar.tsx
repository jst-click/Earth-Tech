import { SITE } from '../data/site'
import PhoneLink from './PhoneLink'
import GstBadge from './GstBadge'
import './TopBar.css'

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container top-bar__inner">
        <div className="top-bar__left">
          <span className="top-bar__item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            {SITE.addressShort}
          </span>
          <span className="top-bar__item top-bar__gst">
            <GstBadge />
          </span>
          <a href={`mailto:${SITE.email}`} className="top-bar__item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            {SITE.email}
          </a>
        </div>
        <div className="top-bar__right">
          Need help? Call us: <PhoneLink />
        </div>
      </div>
    </div>
  )
}
