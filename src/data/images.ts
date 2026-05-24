/** Local images in /public/images — works offline, no external CDN */

const img = (path: string) => path

export const IMAGES = {
  hero: img('/images/hero.jpg'),
  about: {
    background: img('/images/about/about-bg.png'),
    surveyor: img('/images/about/about-survey.png'),
  },
  fallback: img('/images/hero.jpg'),
  banners: {
    about: img('/images/banner-about.jpg'),
    services: img('/images/banner-services.jpg'),
    contact: img('/images/banner-contact.jpg'),
    default: img('/images/hero.jpg'),
  },
  services: {
    hadbastu:
      'https://www.global-agriculture.com/wp-content/uploads/2025/02/Untitled-1-21-768x427.jpg',
    '11e-sketch': img('/images/services/11e-sketch.jpg'),
    'tatkal-podi':
      'https://static.langimg.com/vk/thumb/119685020/podi-land.jpg?imgsize=120816&width=1600&height=900&resizemode=75',
    alienation:
      'https://media.assettype.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticleimages%2F2022%2F04%2F25%2Fistock-12543307821-1103209-1650697517-1103646-1650839309.jpg?w=undefined&auto=format%2Ccompress&fit=max',
    topographical:
      'https://i0.wp.com/epitomegs.com/wp-content/uploads/2021/05/topographic-survay.jpg?fit=1000%2C668&ssl=1',
    'marking-staking': 'https://moggs.in/wp-content/uploads/2025/09/Artboard-231.png',
    'measured-drawings':
      'https://www.lifeofanarchitect.com/wp-content/uploads/2019/07/As-Built-Measurements-02.jpg',
    geotechnical: img('/images/services/geotechnical.jpg'),
    dgps: img('/images/services/dgps.jpg'),
    cadastral: img('/images/services/cadastral.jpg'),
    lidar:
      'https://cdn.prod.website-files.com/67510567a502b6a7c4c13a49/69787c891aeaff2dc522c0db_6978037a12006df3518d9bcc-1769502210673.jpeg',
    alignment: 'https://adgonline.in/sites/assets/front/file/16364489847600872.jpg',
    quantity:
      'https://duotax.com.au/wp-content/uploads/what-is-a-quantity-surveyor-min.jpg',
  },
} as const

export function getServiceImage(serviceId: string): string {
  const key = serviceId as keyof typeof IMAGES.services
  return IMAGES.services[key] ?? IMAGES.about.background
}

export type BannerKey = keyof typeof IMAGES.banners
