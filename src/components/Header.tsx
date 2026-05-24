import { useState, type FormEvent } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { MAIN_NAV_LINKS, SITE } from '../data/site'
import { ALL_SERVICES, getServicePath } from '../data/services'
import Logo from './Logo'
import ServicesDropdown from './ServicesDropdown'
import './Header.css'
import './Logo.css'

const [earth, tech] = SITE.mobileBrand.split(' ')

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  function closeMenu() {
    setMenuOpen(false)
  }

  function closeSearch() {
    setSearchOpen(false)
    setSearchQuery('')
  }

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const q = searchQuery.trim().toLowerCase()
    if (!q) return

    const match = ALL_SERVICES.find(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.id.replace(/-/g, ' ').includes(q),
    )

    navigate(match ? getServicePath(match.id) : '/services')
    closeSearch()
    closeMenu()
  }

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo header__logo--desktop" onClick={closeMenu}>
          <Logo className="header__logo-img" height={52} />
          <div className="header__logo-text">
            <strong>{SITE.name}</strong>
            <small>Land Surveyor & Revenue Services</small>
          </div>
        </Link>

        <button
          type="button"
          className={`header__toggle ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <Link to="/" className="header__mobile-center" onClick={closeMenu}>
          <Logo className="header__mobile-center__logo" height={40} />
          <span className="header__mobile-brand__name" aria-label={SITE.name}>
            <span className="header__mobile-brand__earth">{earth}</span>{' '}
            <span className="header__mobile-brand__tech">{tech}</span>
          </span>
        </Link>

        <div className={`header__search ${searchOpen ? 'open' : ''}`}>
          <button
            type="button"
            className="header__search-icon"
            aria-label={searchOpen ? 'Close search' : 'Open search'}
            aria-expanded={searchOpen}
            onClick={() => (searchOpen ? closeSearch() : setSearchOpen(true))}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          {searchOpen && (
            <form className="header__search-panel" onSubmit={handleSearch} role="search">
              <input
                type="search"
                className="header__search-input"
                placeholder="Search services…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search services"
                autoFocus
              />
              <button type="submit" className="header__search-submit" aria-label="Search">
                Go
              </button>
            </form>
          )}
        </div>

        <nav className={`header__nav ${menuOpen ? 'open' : ''}`}>
          <div className="header__nav-header">
            <span className="header__nav-title">Menu</span>
            <button
              type="button"
              className="header__nav-close"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

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
