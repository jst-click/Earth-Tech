import { FaStar } from 'react-icons/fa'

type Props = {
  size?: number
  className?: string
}

export function StarIcon({ size = 14, className }: Props) {
  return <FaStar size={size} className={className} aria-hidden />
}

type RatingProps = {
  count?: number
  size?: number
  className?: string
}

export function StarRating({ count = 5, size = 16, className }: RatingProps) {
  return (
    <span className={className} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <FaStar key={i} size={size} aria-hidden />
      ))}
    </span>
  )
}
