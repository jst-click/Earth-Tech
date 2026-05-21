import { Link } from 'react-router-dom'
import AddressBlock from './AddressBlock'
import ContactForm from './ContactForm'
import GstBadge from './GstBadge'
import PhoneLink from './PhoneLink'
import './ContactCTA.css'

export default function ContactCTA() {
  return (
    <section className="section contact-cta section-alt">
      <div className="container contact-cta__grid">
        <div className="contact-cta__text">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Have any question?</h2>
          <h3>Feel free to Contact</h3>
          <p>
            Please contact us with your questions and needs. Our team would be delighted to assist
            you promptly with surveying and revenue services.
          </p>
          <div className="contact-cta__details">
            <GstBadge />
            <AddressBlock />
            <p className="contact-cta__phone">
              <PhoneLink />
            </p>
          </div>
          <Link to="/contact" className="btn btn-dark">
            Book Appointment
          </Link>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
