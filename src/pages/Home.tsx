import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import StatsSection from '../components/StatsSection'
import WhyUsSection from '../components/WhyUsSection'
import ClientsBanner from '../components/ClientsBanner'
import GallerySection from '../components/GallerySection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactCTA from '../components/ContactCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <ClientsBanner />
      <StatsSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactCTA />
    </>
  )
}
