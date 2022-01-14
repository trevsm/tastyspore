import React from "react"

const sinClip = ({
  quality,
  invert,
  amplitude,
  period,
  xShift,
  yShift,
  method,
}: {
  quality: number
  invert: boolean
  amplitude: number
  period: number
  xShift: number
  yShift: number
  method: (x: number) => number
}) => {
  const endpoints = invert ? "100% 100%, 0% 100%" : "100% 0%, 0% 0%"
  // if (invert) amplitude += Math.PI / (2 * amplitude)
  const clipStyle = `polygon(${endpoints}, ${Array(quality)
    .fill(null)
    .map((_, i) => {
      const max = (i * (101 + quality * 2)) / quality
      const value = (max - i) * (period / (Math.PI * 20)) - xShift

      if (invert) return `${max}% ${amplitude * method(value) + yShift}%`
      return `${max}% ${amplitude * method(value) + yShift}%`
    })
    .join(", ")}
      )`
  return {
    WebkitClipPath: clipStyle,
    clipPath: clipStyle,
  } as React.CSSProperties
}

export { sinClip }
