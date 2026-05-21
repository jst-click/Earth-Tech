import { SITE, getPhoneTel } from '../data/site'

type Props = {
  className?: string
}

export default function PhoneLink({ className }: Props) {
  return (
    <a href={`tel:${getPhoneTel()}`} className={className}>
      {SITE.phone}
    </a>
  )
}
