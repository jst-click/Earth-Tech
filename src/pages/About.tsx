import PageBanner from '../components/PageBanner'
import AboutSection from '../components/AboutSection'
import StatsSection from '../components/StatsSection'
import WhyUsSection from '../components/WhyUsSection'
import ContactCTA from '../components/ContactCTA'
import { SITE } from '../data/site'

export default function About() {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle={`${SITE.name} — Your Trusted Survey Partner`}
        bannerKey="about"
      />
      <AboutSection />
      <StatsSection />
      <WhyUsSection />
      <ContactCTA />
    </>
  )
}
