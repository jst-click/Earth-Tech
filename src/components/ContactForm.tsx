import { FormEvent, useState } from 'react'
import './ContactForm.css'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="contact-form contact-form--success">
        <p>Thank you! Your message has been received. We will contact you shortly.</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="name">Your Name</label>
          <input id="name" name="name" type="text" required placeholder="Enter your name" />
        </div>
        <div className="contact-form__field">
          <label htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" required placeholder="Enter your email" />
        </div>
      </div>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" name="phone" type="tel" placeholder="Enter your phone" />
        </div>
        <div className="contact-form__field">
          <label htmlFor="service">Service Required</label>
          <select id="service" name="service" defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            <optgroup label="Revenue Services">
              <option>Adbastu</option>
              <option>11E Sketch</option>
              <option>Tatkal Podi</option>
              <option>Alination</option>
            </optgroup>
            <optgroup label="Surveying Services">
              <option>Topographical Surveys</option>
              <option>Marking / Staking Out Works</option>
              <option>Measured Drawings</option>
              <option>Geotechnical Investigation</option>
              <option>DGPS Surveys</option>
              <option>Cadastral Mapping</option>
              <option>Lidar Surveys</option>
              <option>Alignment Surveys</option>
              <option>Quantity Surveying</option>
            </optgroup>
          </select>
        </div>
      </div>
      <div className="contact-form__field">
        <label htmlFor="message">Your Message</label>
        <textarea id="message" name="message" rows={5} required placeholder="How can we help you?" />
      </div>
      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
    </form>
  )
}
