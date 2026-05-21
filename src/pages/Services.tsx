import PageBanner from '../components/PageBanner'
import ServicesSection from '../components/ServicesSection'
import WhyUsSection from '../components/WhyUsSection'
import ContactCTA from '../components/ContactCTA'

export default function Services() {
  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Revenue Services & Land Surveying Solutions"
        bannerKey="services"
      />
      <ServicesSection showAll />
      <WhyUsSection />
      <ContactCTA />
    </>
  )
}
