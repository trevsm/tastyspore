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
  text: {
    dark: "#3c414e",
    light: "#e7e7e7",
  },
  main: {
    accent: "#67718d",
    pink: "#f36766",
  },
  material: {
    sky: "#dcf2ff", // sky
    grass: "#deffe3", // grass
    dirt: "#fff2e1", // dirt
    rock: "#ededed", // rock
  },
} as const
type ColorsType = {
  text: {
    dark: string
    light: string
  }
  main: {
    accent: string
    pink: string
  }
  material: {
    sky: string
    grass: string
    dirt: string
    rock: string
  }
}

//GENERAL

const Content = styled.section<{expand?:boolean}>`
  position: relative;
  margin: 0 auto;
  width: 100%;
  ${props => !props.expand && `max-width: ${maxWidth};`}
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

const Blob = styled.div`
  width: 100%;
  padding: 10px;
  section {
    position: relative;
    z-index: 0;
    padding: 15px 20px;
    border-radius: 30px;
    max-width: 500px;
  }
`

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

const H3 = styled.h3`
  font-family: ${font.header};
  font-size: 30px;
  font-weight: bold;
  text-transform: capitalize;
`

const P = styled.p`
  font-size: 23px;
  line-height: 35px;
`
const Hr = styled.hr`
  padding: 1px;
  margin: 20px 10px;
  border: unset;
  background: #1e1e1e21;
  border-radius: 100%;
`

const Flex = styled.div<{
  justify?: string
  direction?: "row" | "column"
  wrap?: boolean
}>`
  display: flex;
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "unset")};
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

const Quantity = styled.div`
  font-family: monospace;
  line-height: 27px;
  .add,
  .minus,
  .num {
    color: #383838;
    display: inline-block;
    width: 30px;
    height: 30px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }
  .add,
  .minus {
    max-width: 30px;
    border: 2px solid #383838;
    border-radius: 5px;
  }
`

function PickQuantity({
  current,
  add,
  minus,
}: {
  current: number
  add: () => void
  minus: () => void
}) {
  return (
    <Quantity>
      <button className="add" onClick={() => add()}>
        +
      </button>
      <span className="num">{current}</span>
      <button
        className="minus"
        onClick={() => {
          minus()
        }}
      >
        -
      </button>
    </Quantity>
  )
}

/////////////////
export type { ColorsType }

export {
  PickQuantity,
  Quantity,
  Blob,
  colors,
  maxWidth,
  Hide,
  H1,
  H2,
  H3,
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
