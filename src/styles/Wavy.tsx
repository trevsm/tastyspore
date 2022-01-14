import React from "react"
import { sinClip } from "./clipPaths"

function Wavy({
  className,
  invert = false,
  values,
  method,
}: {
  className: string
  invert?: boolean
  values: number[]
  method: (x: number) => number
}) {
  const clipValues = {
    quality: Math.floor(values[0]),
    amplitude: values[1],
    period: values[2],
    xShift: values[3],
    method,
  }

  return (
    <div
      className={"wavy " + className}
      style={{
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
  method,
}: {
  values: number[]
  classNames: string[]
  method: (x: number) => number
}) {
  return (
    <div className="wavysection">
      <div className="content">
        <Wavy
          className={"top " + classNames[0]}
          values={values}
          method={method}
        />
      </div>
      <div className="content">
        <Wavy
          className={"bottom " + classNames[1]}
          invert={true}
          values={values}
          method={method}
        />
      </div>
    </div>
  )
}
