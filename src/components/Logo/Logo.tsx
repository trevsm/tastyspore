import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./Logo.scss"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

export default function Logo() {
  const breakpoints = useBreakpoint()
  return (
    <div className={"logo"}>
      {breakpoints.xs ? (
        <StaticImage
          src="../../images/tastyspore.png"
          alt="TastySpore Logo"
          placeholder="none"
          quality={80}
          width={120}
        />
      ) : (
        <StaticImage
          src="../../images/tastyspore.png"
          alt="TastySpore Logo"
          placeholder="none"
          quality={80}
          width={200}
        />
      )}
    </div>
  )
}
