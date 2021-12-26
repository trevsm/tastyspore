import { MushroomData } from "../Interfaces"

const data = require("./mushrooms.json")

export default function getItem(id: string): MushroomData[] {
  return data.filter((item: MushroomData) => item.id == id)
}
