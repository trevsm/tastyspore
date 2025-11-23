import React from "react"
import styled from "styled-components"
import { colors, ColorsType, Content } from "src/styles"
import { sinClip } from "./clipPaths"

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

// WAVY
const WavySection = styled.div<{ shrink?: boolean }>`
  --height: 300px;
  ${(props) => props.shrink && "margin: -100px 0"}
`
const WavyStyles = styled.div<{ background: string }>`
  height: var(--height);
  border-radius: 0;
  background-color: ${(props) => props.background};
  ${(props) => {
    const texture = getPaperTexture(props.background)
    return `background-image: ${texture.backgroundImage}; background-size: ${texture.backgroundSize};`
  }}
  margin-top: -1px;
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
      <Content expand>
        <Wavy values={values} method={method} color={colors[0]} />
      </Content>
      <Content expand>
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
  ${(props) => {
    const texture = getPaperTexture(props.color)
    return `background-image: ${texture.backgroundImage}; background-size: ${texture.backgroundSize};`
  }}
  clip-path: polygon(
    ${(props) => (!props.top ? `100% 100%, 0% 100%` : `100% 0%, 0% 0%`)},
    ${(props) => staticClipPaths[props.clipIndex]}
  );
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    ${(props) => {
      const texture = getPaperTexture(props.color)
      return `background-image: url("${texture.noiseUrl}"); opacity: ${texture.noiseOpacity};`
    }}
    pointer-events: none;
    clip-path: inherit;
  }
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
