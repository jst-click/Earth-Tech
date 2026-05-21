import type { IconType } from 'react-icons'
import {
  FaBolt,
  FaBroadcastTower,
  FaChartBar,
  FaClipboardList,
  FaCompass,
  FaDraftingCompass,
  FaFlask,
  FaFolderOpen,
  FaMap,
  FaMapMarkerAlt,
  FaRoad,
  FaRulerCombined,
  FaSatellite,
} from 'react-icons/fa'

const SERVICE_ICONS: Record<string, IconType> = {
  adbastu: FaClipboardList,
  '11e-sketch': FaDraftingCompass,
  'tatkal-podi': FaBolt,
  alination: FaCompass,
  topographical: FaMap,
  'marking-staking': FaMapMarkerAlt,
  'measured-drawings': FaRulerCombined,
  geotechnical: FaFlask,
  dgps: FaSatellite,
  cadastral: FaFolderOpen,
  lidar: FaBroadcastTower,
  alignment: FaRoad,
  quantity: FaChartBar,
}

type Props = {
  id: string
  size?: number
  className?: string
}

export default function ServiceIcon({ id, size = 28, className }: Props) {
  const Icon = SERVICE_ICONS[id] ?? FaMap
  return <Icon size={size} className={className} aria-hidden />
}
