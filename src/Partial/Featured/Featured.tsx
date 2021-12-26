import React from "react"
import { Card } from ".."
import { MushroomData } from "../../Interfaces"

const data = require("../../Data/mushrooms.json")

export default function Featured() {
  return (
    <>
      {data.map(
        (m: MushroomData, idx: number) =>
          m.featured && (
            <Card
              key={idx}
              id={m.id}
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
