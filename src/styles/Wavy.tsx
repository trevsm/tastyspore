import React, { useEffect, useState } from "react"
import { sinClip } from "./clipPaths"

function Wavy({
  className,
  invert = false,
  values,
}: {
  className: string
  invert?: boolean
  values: number[]
}) {
  const [sw, setSw] = useState(0)
  const clipValues = {
    quality: Math.floor(sw / values[0]),
    amplitude: values[1],
    period: sw / 1000 + values[2] * Math.PI,
    xShift: values[3] * Math.PI,
  }
  useEffect(() => {
    setSw(window.innerWidth)
    window.addEventListener("resize", () => {
      setSw(window.innerWidth)
    })
  }, [])

  return (
    <div
      className={"wavy " + className}
      style={{
        "--height": 200 + "px",
        ...sinClip({
          ...clipValues,
          yShift: 50,
          invert,
        }),
      }}
    ></div>
  )
}
export function WavyBreak({
  values,
  classNames,
}: {
  values: number[]
  classNames: string[]
}) {
  return (
    <div className="wavysection">
      <div className="content">
        <Wavy className={"top " + classNames[0]} values={values} />
      </div>
      <div className="content">
        <Wavy
          className={"bottom " + classNames[1]}
          invert={true}
          values={values}
        />
      </div>
    </div>
  )
}
