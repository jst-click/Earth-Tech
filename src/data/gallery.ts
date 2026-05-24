export type GalleryItem = {
  id: string
  title: string
  alt: string
  src: string
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'limca-record',
    title: 'Limca Book of Records — National Record',
    alt: 'Limca Book of Records certificate for largest India map survey using Total Station',
    src: '/images/gallery/limca-book-of-records.png',
  },
  {
    id: 'surveyor-license',
    title: 'Private Land Surveyor License',
    alt: 'Government of Karnataka private land surveyor license certificate',
    src: '/images/gallery/surveyor-license.png',
  },
]
