import React from "react"
import { Card } from ".."
import { MushroomData } from "../../interface"

const data = require("../../data/mushrooms.json")
console.log(data)

export default function Featured() {
  return (
    <>
      {data.map(
        (m: MushroomData, idx: number) =>
          m.featured && (
            <Card
              key={idx}
              title={m.title}
              summary={m.summary}
              logo={m.logo}
              price={m.price}
            />
          )
      )}
    </>
  )
}
