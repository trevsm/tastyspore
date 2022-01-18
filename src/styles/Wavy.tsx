import React from "react"
import styled from "styled-components"
import { BgColor, Content } from "src/styles"
import { sinClip } from "./clipPaths"

// WAVY
const WavySection = styled.div<{ shrink?: boolean }>`
  --height: 300px;
  ${(props) => props.shrink && "margin: -100px 0"}
`
const WavyStyles = styled.div<{ background: string }>`
  height: var(--height);
  border-radius: 0;
  background-color: ${(props) => props.background};
  margin-top: -1px;
`
const WavyBottom = styled(WavyStyles)`
  position: relative;
  z-index: 5;
  margin-top: calc(-1 * (var(--height) - 3px)) !important;
  margin-bottom: -1px;
`

function Wavy({
  invert = false,
  values,
  color,
  method,
}: {
  invert?: boolean
  values: number[]
  color: string
  method: (x: number) => number
}) {
  const clipValues = {
    quality: Math.floor(values[0]),
    amplitude: values[1],
    period: values[2],
    xShift: values[3],
    method,
  }

  const clipStyles = {
    ...sinClip({
      ...clipValues,
      yShift: 50,
      invert,
    }),
  }

  return !invert ? (
    <WavyStyles style={clipStyles} background={color}></WavyStyles>
  ) : (
    <WavyBottom style={clipStyles} background={color}></WavyBottom>
  )
}
export function WavyBreak({
  values,
  colors,
  method,
  shrink,
}: {
  values: number[]
  colors: string[]
  method: (x: number) => number
  shrink?: boolean
}) {
  if (!colors || colors.length != 2) return null
  return (
    <WavySection shrink={shrink}>
      <Content>
        <Wavy values={values} method={method} color={colors[0]} />
      </Content>
      <Content>
        <Wavy invert values={values} method={method} color={colors[1]} />
      </Content>
    </WavySection>
  )
}
