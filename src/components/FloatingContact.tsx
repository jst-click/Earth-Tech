import { FaPhone, FaWhatsapp } from 'react-icons/fa'
import { SITE, getPhoneTel, getWhatsAppUrl } from '../data/site'
import './FloatingContact.css'

export default function FloatingContact() {
  return (
    <div className="floating-contact" aria-label="Quick contact">
      <a
        href={`tel:${getPhoneTel()}`}
        className="floating-contact__btn floating-contact__btn--call"
        aria-label={`Call ${SITE.phone}`}
      >
        <FaPhone aria-hidden />
        <span className="floating-contact__label">Call</span>
      </a>
      <a
        href={getWhatsAppUrl()}
        className="floating-contact__btn floating-contact__btn--whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp aria-hidden />
        <span className="floating-contact__label">WhatsApp</span>
      </a>
    </div>
  )
}
