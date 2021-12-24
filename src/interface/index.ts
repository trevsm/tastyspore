import { MushroomData } from "./MushroomData"

interface Price {
  msrp: number
  sale: number
}

interface Image {
  source: string
  width: string
}

export type { Price, Image, MushroomData }
