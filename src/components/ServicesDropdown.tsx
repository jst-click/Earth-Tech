import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { SERVICE_MENU, getServicePath } from '../data/services'
import ServiceIcon from './icons/ServiceIcon'
import './ServicesDropdown.css'

const MOBILE_NAV_MQ = '(max-width: 900px)'

type Props = {
  onNavigate?: () => void
}

function useMobileNav() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(MOBILE_NAV_MQ).matches : false,
  )

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_NAV_MQ)
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return isMobile
}

export default function ServicesDropdown({ onNavigate }: Props) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const isMobile = useMobileNav()
  const isServicesActive = location.pathname.startsWith('/services')

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (isMobile) return

    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open, isMobile])

  function close() {
    setOpen(false)
    onNavigate?.()
  }

  return (
    <div
      ref={ref}
      className={`services-dropdown ${isMobile ? 'services-dropdown--flat' : ''} ${open ? 'open' : ''} ${isServicesActive ? 'active' : ''}`}
    >
      {isMobile ? (
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `services-dropdown__trigger services-dropdown__trigger--flat${isActive ? ' active' : ''}`
          }
          onClick={onNavigate}
          end={false}
        >
          Services
        </NavLink>
      ) : (
        <button
          type="button"
          className="services-dropdown__trigger"
          aria-expanded={open}
          aria-haspopup="true"
          onClick={() => setOpen(!open)}
        >
          Services
          <svg
            className="services-dropdown__chevron"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </button>
      )}

      <div className="services-dropdown__panel">
        <Link to="/services" className="services-dropdown__all" onClick={close}>
          View All Services
        </Link>

        <div className="services-dropdown__columns">
          {SERVICE_MENU.map((group) => (
            <div key={group.label} className="services-dropdown__group">
              <p className="services-dropdown__group-title">{group.label}</p>
              <ul>
                {group.services.map((service) => (
                  <li key={service.id}>
                    <Link to={getServicePath(service.id)} onClick={close}>
                      <ServiceIcon id={service.id} size={16} className="services-dropdown__icon" />
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
