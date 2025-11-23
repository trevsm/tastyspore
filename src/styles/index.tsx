import React, { ReactNode } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Link as GLink } from "gatsby"
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

const Content = styled.section<{ expand?: boolean }>`
  position: relative;
  margin: 0 auto;
  width: 100%;
  ${(props) => !props.expand && `max-width: ${maxWidth};`}
`

const Hide = styled.div<{ disabled: boolean }>`
  ${(props) =>
    props.disabled &&
    `pointer-events: none;
    opacity: 0;`}
`

// Paper texture generator function
const getPaperTexture = (background: string) => {
  const isBlue = background.includes("#dcf2ff") || background.includes("var(--first)")
  const isGreen = background.includes("#deffe3") || background.includes("var(--second)")
  const isOrange = background.includes("#fff2e1") || background.includes("var(--third)")
  const isGrey = background.includes("#ededed") || background.includes("var(--fourth)")

  if (isBlue) {
    // Smooth watercolor paper texture
    return {
      backgroundImage: `
        repeating-linear-gradient(
          45deg,
          rgba(0, 0, 0, 0.015) 0px,
          transparent 2px,
          transparent 8px,
          rgba(0, 0, 0, 0.015) 10px
        ),
        repeating-linear-gradient(
          -45deg,
          rgba(0, 0, 0, 0.015) 0px,
          transparent 3px,
          transparent 7px,
          rgba(0, 0, 0, 0.015) 10px
        ),
        radial-gradient(
          circle at 30% 40%,
          rgba(255, 255, 255, 0.15) 0%,
          transparent 60%
        ),
        radial-gradient(
          circle at 70% 60%,
          rgba(255, 255, 255, 0.1) 0%,
          transparent 50%
        )
      `,
      backgroundSize: "400px 400px, 350px 350px, 500px 500px, 450px 450px",
      noiseUrl: "data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.4' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.2'/%3E%3C/svg%3E",
      noiseOpacity: 0.35
    }
  } else if (isGreen) {
    // Rough handmade paper texture
    return {
      backgroundImage: `
        repeating-linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.03) 0px,
          transparent 1px,
          transparent 4px,
          rgba(0, 0, 0, 0.025) 5px,
          transparent 6px,
          rgba(0, 0, 0, 0.02) 7px
        ),
        repeating-linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.025) 0px,
          transparent 2px,
          transparent 5px,
          rgba(0, 0, 0, 0.03) 6px
        ),
        repeating-linear-gradient(
          15deg,
          rgba(0, 0, 0, 0.015) 0px,
          transparent 3px,
          transparent 9px,
          rgba(0, 0, 0, 0.02) 12px
        ),
        radial-gradient(
          ellipse at 25% 35%,
          rgba(0, 0, 0, 0.02) 0%,
          transparent 40%
        )
      `,
      backgroundSize: "600px 600px, 550px 550px, 700px 700px, 800px 800px",
      noiseUrl: "data:image/svg+xml,%3Csvg width='300' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='5' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.25'/%3E%3C/svg%3E",
      noiseOpacity: 0.5
    }
  } else if (isOrange) {
    // Coarse kraft paper texture
    return {
      backgroundImage: `
        repeating-linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.04) 0px,
          transparent 1px,
          transparent 3px,
          rgba(0, 0, 0, 0.035) 4px,
          transparent 5px,
          rgba(0, 0, 0, 0.03) 6px
        ),
        repeating-linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.035) 0px,
          transparent 1px,
          transparent 4px,
          rgba(0, 0, 0, 0.04) 5px
        ),
        repeating-linear-gradient(
          22deg,
          rgba(0, 0, 0, 0.02) 0px,
          transparent 2px,
          transparent 6px,
          rgba(0, 0, 0, 0.025) 8px
        ),
        repeating-linear-gradient(
          -18deg,
          rgba(0, 0, 0, 0.015) 0px,
          transparent 4px,
          transparent 10px,
          rgba(0, 0, 0, 0.02) 14px
        ),
        radial-gradient(
          ellipse at 60% 45%,
          rgba(0, 0, 0, 0.03) 0%,
          transparent 50%
        )
      `,
      backgroundSize: "500px 500px, 450px 450px, 650px 650px, 600px 600px, 900px 900px",
      noiseUrl: "data:image/svg+xml,%3Csvg width='250' height='250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='6' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E",
      noiseOpacity: 0.55
    }
  } else if (isGrey) {
    // Fine cardstock texture
    return {
      backgroundImage: `
        repeating-linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.02) 0px,
          transparent 1px,
          transparent 5px,
          rgba(0, 0, 0, 0.018) 6px
        ),
        repeating-linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.018) 0px,
          transparent 1px,
          transparent 6px,
          rgba(0, 0, 0, 0.02) 7px
        ),
        repeating-linear-gradient(
          12deg,
          rgba(0, 0, 0, 0.012) 0px,
          transparent 3px,
          transparent 8px,
          rgba(0, 0, 0, 0.015) 11px
        ),
        radial-gradient(
          circle at 50% 50%,
          rgba(255, 255, 255, 0.08) 0%,
          transparent 45%
        ),
        radial-gradient(
          circle at 20% 80%,
          rgba(0, 0, 0, 0.01) 0%,
          transparent 40%
        )
      `,
      backgroundSize: "350px 350px, 380px 380px, 420px 420px, 600px 600px, 500px 500px",
      noiseUrl: "data:image/svg+xml,%3Csvg width='180' height='180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.18'/%3E%3C/svg%3E",
      noiseOpacity: 0.4
    }
  } else {
    // Default texture
    return {
      backgroundImage: `
        repeating-linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.02) 0px,
          transparent 1px,
          transparent 2px,
          rgba(0, 0, 0, 0.02) 3px
        ),
        repeating-linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.02) 0px,
          transparent 1px,
          transparent 2px,
          rgba(0, 0, 0, 0.02) 3px
        )
      `,
      backgroundSize: "400px 400px, 400px 400px",
      noiseUrl: "data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.2'/%3E%3C/svg%3E",
      noiseOpacity: 0.4
    }
  }
}

interface BgColorProps {
  background: string
}
const BgColor = styled.div<BgColorProps>`
  background-color: ${(props) => props.background};
  ${(props) => {
    const texture = getPaperTexture(props.background)
    return `background-image: ${texture.backgroundImage}; background-size: ${texture.backgroundSize};`
  }}
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    ${(props) => {
      const texture = getPaperTexture(props.background)
      return `background-image: url("${texture.noiseUrl}"); opacity: ${texture.noiseOpacity};`
    }}
    pointer-events: none;
  }
`

// Routing
interface LinkInterface {
  children: ReactNode | ReactNode[]
  to: string
  transitionColor: string
  animate?: boolean
}
const Link = ({ children, to, transitionColor, animate }: LinkInterface) => {
  if (!animate) return <GLink to={to}>{children}</GLink>
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
