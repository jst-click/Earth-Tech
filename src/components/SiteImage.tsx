import { useState } from 'react'
import { IMAGES } from '../data/images'

type Props = {
  src: string
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
}

export default function SiteImage({ src, alt, className, loading = 'lazy' }: Props) {
  const [currentSrc, setCurrentSrc] = useState(src)

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      onError={() => {
        if (currentSrc !== IMAGES.fallback) {
          setCurrentSrc(IMAGES.fallback)
        }
      }}
    />
  )
}
