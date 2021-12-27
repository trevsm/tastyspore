import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./Logo.scss"
// import IsMobile from "../../tools/IsMobile"

export default function Logo() {
  // const isMobile = IsMobile()
  // const offset = (before: number, after: number) => {
  //   const h = before - height * 0.0045 * (before - after)
  //   if (h < after) return after
  //   return h
  // }

  // const rOffset = (off: number) => {
  //   const h = height * 0.0045 * off
  //   if (h > off) return off
  //   return h
  // }

  // const logoStyles = !isMobile ? {} : { left: offset(0, -50) + "%" },
  //   imgStyles = !isMobile
  //     ? {}
  //     : {
  //         backgroundColor: `rgba(255, 250, 231, ${rOffset(1)})`,
  //         boxShadow: `2px 2px 2px rgba(235, 222, 138, ${rOffset(0.61)})`,
  //         transform: `translateX(${rOffset(58)}%)`,
  //       },
  //   imgWidth = !isMobile ? 300 : offset(300, 120)

  return (
    <div className={"logo"}>
      <StaticImage
        src="../../images/tastyspore.png"
        alt="TastySpore Logo"
        placeholder="none"
        quality={40}
        width={300}
      />
    </div>
  )
}
