import React, { ReactNode } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

const maxWidth = "1500px"
const shadow = "1px 1px 2px rgba(0,0,0,.1)"

const devices = {
  mobile: 750,
  tablet: 1080,
}

const font = {
  header: '"adorn-condensed-sans", sans-serif',
  text: '"hind", sans-serif',
}

const colors = {
  first: "#dcf2ff", // sky
  second: "#deffe3", // grass
  third: "#fff2e1", // dirt
  fourth: "#ededed", // rock
} as const
type ColorsType = keyof typeof colors

//GENERAL

const Content = styled.section`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: ${maxWidth};
`

const Hide = styled.div<{ disabled: boolean }>`
  ${(props) =>
    props.disabled &&
    `pointer-events: none;
    opacity: 0;`}
`

interface BgColorProps {
  background: string
}
const BgColor = styled.div<BgColorProps>`
  background-color: ${(props) => props.background};
`

// Routing
interface LinkInterface {
  children: ReactNode | ReactNode[]
  to: string
  transitionColor: string
}
const Link = ({ children, to, transitionColor }: LinkInterface) => {
  return (
    <AniLink
      paintDrip
      hex={transitionColor}
      to={to}
      style={{ width: "fit-content" }}
    >
      {children}
    </AniLink>
  )
}

const H1 = styled.h1`
  font-family: ${font.header};
  font-size: 55px;
  margin-bottom: 20px;
  line-height: 60px;
  text-transform: capitalize;
`
const H2 = styled.h2`
  font-family: ${font.header};
  font-size: 55px;
  margin-bottom: 20px;
  line-height: 60px;
  text-transform: capitalize;
`
const P = styled.p`
  font-size: 23px;
  line-height: 35px;
`
const Hr = styled.hr`
  padding: 1px;
  margin: 30px 10px;
  border: unset;
  background: #1e1e1e21;
  border-radius: 100%;
`

const Flex = styled.div<{ justify?: string; direction?: "row" | "column" }>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  justify-content: ${(props) => (props.justify ? props.justify : "left")};
`
const HalfItem = styled.div<{ width?: string }>`
  margin: 40px;
  width: ${(props) => (props.width ? props.width : "50%")};
  max-width: 450px;
  min-width: 300px;
  @media only screen and (max-width: ${devices.tablet}px) {
    & {
      width: 100%;
      max-width: initial;
    }
  }
`

/////////////////
export type { ColorsType }

export {
  colors,
  maxWidth,
  Hide,
  H1,
  H2,
  P,
  Hr,
  Content,
  BgColor,
  Link,
  Flex,
  HalfItem,
  shadow,
  devices,
  font,
}
