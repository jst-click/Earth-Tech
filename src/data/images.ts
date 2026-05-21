/** Local images in /public/images — works offline, no external CDN */

const img = (path: string) => path

export const IMAGES = {
  hero: img('/images/hero.jpg'),
  about: {
    background: img('/images/about-bg.jpg'),
    surveyor: img('/images/about-survey.jpg'),
  },
  fallback: img('/images/hero.jpg'),
  banners: {
    about: img('/images/banner-about.jpg'),
    services: img('/images/banner-services.jpg'),
    contact: img('/images/banner-contact.jpg'),
    default: img('/images/hero.jpg'),
  },
  gallery: [
    { src: img('/images/gallery-1.jpg'), title: 'Topographical Survey', alt: 'Topographical land survey mapping' },
    { src: img('/images/gallery-2.jpg'), title: 'DGPS Mapping', alt: 'DGPS satellite positioning survey' },
    { src: img('/images/gallery-3.jpg'), title: 'LiDAR Survey', alt: 'Drone LiDAR aerial survey' },
    { src: img('/images/gallery-4.jpg'), title: 'Cadastral Mapping', alt: 'Cadastral map and land records' },
    { src: img('/images/gallery-5.jpg'), title: 'Revenue Services', alt: 'Property and revenue land documentation' },
    { src: img('/images/gallery-6.jpg'), title: 'Geotechnical Site', alt: 'Geotechnical investigation at construction site' },
  ],
  services: {
    adbastu: img('/images/services/adbastu.jpg'),
    '11e-sketch': img('/images/services/11e-sketch.jpg'),
    'tatkal-podi': img('/images/services/tatkal-podi.jpg'),
    alination: img('/images/services/alination.jpg'),
    topographical: img('/images/services/topographical.jpg'),
    'marking-staking': img('/images/services/marking-staking.jpg'),
    'measured-drawings': img('/images/services/measured-drawings.jpg'),
    geotechnical: img('/images/services/geotechnical.jpg'),
    dgps: img('/images/services/dgps.jpg'),
    cadastral: img('/images/services/cadastral.jpg'),
    lidar: img('/images/services/lidar.jpg'),
    alignment: img('/images/services/alignment.jpg'),
    quantity: img('/images/services/quantity.jpg'),
  },
} as const

export function getServiceImage(serviceId: string): string {
  const key = serviceId as keyof typeof IMAGES.services
  return IMAGES.services[key] ?? IMAGES.about.background
}

export type BannerKey = keyof typeof IMAGES.banners
