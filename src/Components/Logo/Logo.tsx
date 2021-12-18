import React from "react"

export default function Logo({ height }: { height: number }) {
  const offset = (before: number, after: number) => {
    const h = before - height * 0.0045 * (before - after)
    if (h < after) return after
    return h
  }

  const rOffset = (off: number) => {
    const h = 0 + height * 0.0045 * off
    if (h > off) return off
    return h
  }
  return (
    <div className="logo" style={{ left: offset(0, -50) + "%" }}>
      <img
        src="/tastyspore.png"
        alt="TastySpore Logo"
        width={offset(300, 120)}
        style={{
          backgroundColor: `rgba(255, 250, 231, ${rOffset(1)})`,
          boxShadow: `2px 2px 2px rgba(235, 222, 138, ${rOffset(0.61)})`,
          transform: `translateX(${rOffset(58)}%)`,
        }}
      />
    </div>
  )
}
