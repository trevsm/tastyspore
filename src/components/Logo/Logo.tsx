import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./Logo.scss"

export default function Logo() {
  return (
    <div className={"logo"}>
      <StaticImage
        src="../../images/tastyspore.png"
        alt="TastySpore Logo"
        placeholder="none"
        quality={70}
        width={300}
      />
    </div>
  )
}
