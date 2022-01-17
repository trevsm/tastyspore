import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import styled from "styled-components"

const LogoStyles = styled.div`
  position: relative;
  width: 100%;
  img {
    border: 2px solid #b5b5b561;
    background-color: #ffffff;
    border-radius: 200px;
    padding: 5px;
  }
`

export default function Logo() {
  const breakpoints = useBreakpoint()
  return (
    <LogoStyles>
      {breakpoints.xs ? (
        <StaticImage
          src="../../images/tastyspore.png"
          alt="TastySpore Logo"
          placeholder="none"
          quality={80}
          width={70}
        />
      ) : (
        <StaticImage
          src="../../images/tastyspore.png"
          alt="TastySpore Logo"
          placeholder="none"
          quality={80}
          width={110}
        />
      )}
    </LogoStyles>
  )
}
