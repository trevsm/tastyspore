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

//GENERAL

const PageStyles = styled.div`
  position: relative;
  min-height: 100vh;
  height: 100vh;
  max-height: 100vh;
  min-width: 350px;
  overflow: auto;
  overflow-x: hidden;
  padding: 10px;
`

const Content = styled.section`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: ${maxWidth};
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

const Split = styled.div<{ justify?: string }>`
  display: flex;
  flex-wrap: wrap;
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

export {
  maxWidth,
  PageStyles,
  H1,
  H2,
  P,
  Hr,
  Content,
  BgColor,
  Link,
  Split,
  HalfItem,
  shadow,
  devices,
  font,
}
