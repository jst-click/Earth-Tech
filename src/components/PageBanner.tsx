import { IMAGES, type BannerKey } from '../data/images'
import './PageBanner.css'

type Props = {
  title: string
  subtitle?: string
  image?: string
  bannerKey?: BannerKey
}

export default function PageBanner({ title, subtitle, image, bannerKey }: Props) {
  const bg =
    image ?? (bannerKey ? IMAGES.banners[bannerKey] : IMAGES.banners.default)

  return (
    <section
      className="page-banner"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="page-banner__overlay" />
      <div className="container page-banner__content">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  )
}
