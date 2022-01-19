import React from "react"
import styled from "styled-components"
import { colors, ColorsType, Content } from "src/styles"
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

const staticClipPaths = [
  `0% 45.146%, 8.73333% 44.6725%, 17.4667% 45.4643%, 26.2% 47.3335%, 34.9333% 49.836%, 43.6667% 52.3775%, 52.4% 54.3543%, 61.1333% 55.2968%, 69.8667% 54.9812%, 78.6% 53.4825%, 87.3333% 51.1566%, 96.0667% 48.556%, 104.8% 46.2984%, 113.533% 44.9199%, 122.267% 44.7482%`,
  `0% 46.8404%, 12.1% 43.3822%, 24.2% 41.5031%, 36.3% 40.4251%, 48.4% 40.0083%, 60.5% 40.2196%, 72.6% 41.0748%, 84.7% 42.6636%, 96.8% 45.381%, 108.9% 46.2867%`,
  `0% 50%, 7.05% 59.2099%, 14.1% 52.3232%, 21.15% 41.3762%, 28.2% 45.5013%, 35.25% 57.489%, 42.3% 56.3878%, 49.35% 44.1224%, 56.4% 42.1295%, 63.45% 53.8922%, 70.5% 58.8523%, 77.55% 48.3408%, 84.6% 40.7291%, 91.65% 49.3205%, 98.7% 59.0995%, 105.75% 52.9749%, 112.8% 41.651%, 119.85% 44.919%, 126.9% 57.0673%, 133.95% 56.8637%`,
]

const WaveMain = styled.div<{ shrink?: boolean }>`
  --height: 300px;
  ${(props) => props.shrink && "margin: -100px 0"}
`
interface IStaticWave {
  clipIndex: number
  top?: boolean
  bottom?: boolean
  color: string
}
const Wave = styled.div<IStaticWave>`
  height: var(--height);
  border-radius: 0;
  margin-top: -1px;
  background-color: ${(props) => props.color};
  clip-path: polygon(
    ${(props) => (!props.top ? `100% 100%, 0% 100%` : `100% 0%, 0% 0%`)},
    ${(props) => staticClipPaths[props.clipIndex]}
  );
  ${(props) =>
    props.bottom &&
    `
    position: relative;
    z-index: 5;
    margin-top: calc(-1 * (var(--height) - 3px)) !important;
    margin-bottom: -1px;
  `}
`

export function StaticWave({
  top,
  bottom,
  clipIndex: ci,
  shrink,
}: {
  top: string
  bottom: string
  clipIndex: number
  shrink?: boolean
}) {
  if (ci >= staticClipPaths.length) return null
  return (
    <WaveMain shrink={shrink}>
      <Content>
        <Wave color={top} top clipIndex={ci} />
      </Content>
      <Content>
        <Wave color={bottom} bottom clipIndex={ci} />
      </Content>
    </WaveMain>
  )
}
