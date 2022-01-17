import React, { useEffect, useState } from "react"

interface IOverlay {
  color?: string
}
export function OverlayUntilLoad({ color = "#fff" }: IOverlay) {
  const [show, setShow] = useState(true)
  useEffect(() => {
    setShow(false)
  }, [])
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        bottom: "0",
        background: color,
        zIndex: "100",
        opacity: show ? 1 : 0,
        pointerEvents: "none",
        transition: "opacity .5s ease",
      }}
    ></div>
  )
}
