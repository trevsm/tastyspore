import { Image, Price } from "."

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

export type { MushroomData }
