import PageBanner from '../components/PageBanner'
import AddressBlock from '../components/AddressBlock'
import ContactForm from '../components/ContactForm'
import GstBadge from '../components/GstBadge'
import { SITE, getWhatsAppUrl } from '../data/site'
import PhoneLink from '../components/PhoneLink'
import './Contact.css'

export default function Contact() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Feel free to reach out — we are here to help"
        bannerKey="contact"
      />
      <section className="section contact-page">
        <div className="container contact-page__grid">
          <div className="contact-page__info">
            <div className="contact-info-card">
              <h3>GST Number</h3>
              <p className="contact-info-card__gst">{SITE.gstNumber}</p>
            </div>
            <div className="contact-info-card">
              <h3>Phone Number</h3>
              <div className="contact-info-card__values">
                <PhoneLink />
              </div>
            </div>
            <div className="contact-info-card">
              <h3>E-mail</h3>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
            <div className="contact-info-card">
              <h3>Address</h3>
              <AddressBlock />
            </div>
            <p className="contact-page__gst-note">
              <GstBadge />
            </p>
            <a
              href={getWhatsAppUrl()}
              className="btn btn-primary contact-page__whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send to WhatsApp
            </a>
          </div>
          <div>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
              Have any question?
            </h2>
            <p className="section-subtitle" style={{ marginBottom: '1.5rem' }}>
              Feel free to contact us with your requirements.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
