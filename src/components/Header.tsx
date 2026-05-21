import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MAIN_NAV_LINKS, SITE } from '../data/site'
import Logo from './Logo'
import ServicesDropdown from './ServicesDropdown'
import './Header.css'
import './Logo.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo" onClick={closeMenu}>
          <Logo className="header__logo-img" height={52} />
          <div className="header__logo-text">
            <strong>{SITE.name}</strong>
            <small>Land Surveyor & Revenue Services</small>
          </div>
        </Link>

        <button
          className={`header__toggle ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`header__nav ${menuOpen ? 'open' : ''}`}>
          {MAIN_NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={closeMenu}
              end={link.path === '/'}
            >
              {link.label}
            </NavLink>
          ))}

          <ServicesDropdown onNavigate={closeMenu} />

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={closeMenu}
          >
            Contact
          </NavLink>

          <Link to="/contact" className="btn btn-primary header__cta" onClick={closeMenu}>
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  )
}
