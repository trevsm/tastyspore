interface Price {
  msrp: number
  sale: number
}

interface Image {
  source: string
  sm_width: string
  lg_width: string
}

interface MushroomData {
  id: string
  class: string
  category: string
  logo: Image
  price: Price
  title: string
  summary: string
  full_description: string
  featured?: boolean
}

export type { Price, Image, MushroomData }
