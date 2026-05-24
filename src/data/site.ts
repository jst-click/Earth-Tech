export const SITE = {
  name: 'Earth Tech Survey',
  mobileBrand: 'EARTH TECH',
  mobileTagline: 'Land Surveyor & Revenue Services',
  shortName: 'earthtechsurvey',
  logo: '/images/hape%20(5).png',
  logoAlt: 'Earth Tech Survey — land surveying and revenue services',
  tagline: 'Land Surveyor - Earth Tech Survey',
  heroTitle: 'A PRECISE LAND SURVEY TODAY TRANSLATES INTO BIG SAVINGS TOMORROW',
  heroSubtitle:
    'We are a team of experienced land surveyors, map makers, and cartographers providing accurate and reliable surveying and revenue services.',
  email: 'earthtechsurvey@gmail.com',
  phone: '+91 99645 66581',
  gstNumber: '29ARDPC8322K2ZO',
  addressLines: [
    'Ground Floor, No 96/IB,',
    'Near Outer Ring Road, 1st A Cross Road,',
    'Near H Engineering Services Pvt Ltd,',
    'Hebbal, Bengaluru Urban, Karnataka – 560024.',
  ],
  address:
    'Ground Floor, No 96/IB, Near Outer Ring Road, 1st A Cross Road, Near H Engineering Services Pvt Ltd, Hebbal, Bengaluru Urban, Karnataka – 560024.',
  addressShort: 'Hebbal, Bengaluru Urban, Karnataka – 560024',
  yearEstablished: '1995',
  projectsCompleted: '80000+',
  clientsServed: '50000+',
  servicesCount: '16+',
} as const

/** Digits only, for tel: and WhatsApp links (91XXXXXXXXXX) */
export function getPhoneTel(): string {
  return SITE.phone.replace(/\D/g, '')
}

export function getWhatsAppUrl(
  text = `Hello ${SITE.name}, I would like to inquire about your land surveying services.`,
): string {
  return `https://wa.me/${getPhoneTel()}?text=${encodeURIComponent(text)}`
}

export const MAIN_NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Gallery', path: '/gallery' },
] as const

export const NAV_LINKS = [
  ...MAIN_NAV_LINKS,
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
] as const
