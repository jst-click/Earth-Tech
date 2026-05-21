import { SITE } from '../data/site'

type Props = {
  className?: string
  height?: number
}

export default function Logo({ className = '', height = 56 }: Props) {
  return (
    <img
      src={SITE.logo}
      alt={SITE.logoAlt}
      className={`site-logo ${className}`.trim()}
      height={height}
      width="auto"
      decoding="async"
    />
  )
}
