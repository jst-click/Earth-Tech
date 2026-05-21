import { SITE } from '../data/site'
import './GstBadge.css'

type Props = {
  className?: string
}

export default function GstBadge({ className = '' }: Props) {
  return (
    <span className={`gst-badge ${className}`.trim()}>
      GST: <strong>{SITE.gstNumber}</strong>
    </span>
  )
}
