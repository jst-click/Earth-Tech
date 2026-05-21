import { SITE } from '../data/site'
import './AddressBlock.css'

type Props = {
  variant?: 'full' | 'inline'
}

export default function AddressBlock({ variant = 'full' }: Props) {
  if (variant === 'inline') {
    return <span className="address-block address-block--inline">{SITE.address}</span>
  }

  return (
    <address className="address-block">
      {SITE.addressLines.map((line) => (
        <span key={line} className="address-block__line">
          {line}
        </span>
      ))}
    </address>
  )
}
