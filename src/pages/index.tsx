import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { Page } from "../components/Main/Page/Page"
import Featured from "../components/partials/Featured/Featured"
import { MDXQuery } from "../../types"
import Helmet from "../components/Main/Helmet/Helmet"
import Notice from "../components/Main/Notice/Notice"
import Footer from "../components/Main/Footer/Footer"
import ShiitakeTree from "../components/Media/ShiitakeTree"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { sinClip } from "../styles/clipPaths"
import AniLink from "gatsby-plugin-transition-link/AniLink"

function Wavy({
  backgroundColor,
  invert = false,
}: {
  backgroundColor: string
  invert?: boolean
}) {
  const [sw, setSw] = useState(0)
  const clipValues = {
    quality: Math.floor(sw / 10),
    amplitude: sw / 50,
    period: 5,
    xShift: Math.PI,
  }
  useEffect(() => {
    setSw(window.innerWidth)
    window.addEventListener("resize", () => {
      setSw(window.innerWidth)
    })
  }, [])
  return (
    <div
      className="wavy"
      style={{
        backgroundColor,
        "--height": "150px",
        ...sinClip({
          ...clipValues,
          yShift: 50,
          invert,
        }),
      }}
    ></div>
  )
}

export default function Home({ data }: { data: MDXQuery }) {
  const nodes = data.allMdx.edges

  return (
    <Page navigation={{ cart: true }}>
      <Helmet
        title="Delicious Mushrooms & Tasty Recipes! | TastySpore"
        description="Our Mushrooms grow kits are the best kits available for growing mushrooms indoors. With a 100% guarantee, we know you will love our mushrooms as much as we do."
        keywords={[
          "mushroom",
          "mushroom growing kit",
          "mushroom drawing",
          "mushroom menu",
          "lion's mane mushroom",
          "shiitake mushroom",
          "enoki mushroom",
          "reishi mushroom",
        ]}
      />
      <Notice />
      <div className={"main-top"}>
        <section>
          <div className="left">
            <h1>Delicious Mushrooms & Tasty Recipes</h1>
            <p>
              Grow and cook <b>gourmet</b> mushrooms at home with confidence!
            </p>
            <AniLink paintDrip hex={"#fff"} to={"/shop"}>
              🍄 Go Foraging
            </AniLink>
            <a href="#">📖 Browse Recipes</a>
          </div>
          <div className="right">
            <ShiitakeTree />
          </div>
        </section>
      </div>
      <div className="wavysection">
        <div className="content">
          <Wavy backgroundColor={"#eef6ff"} />
        </div>
        <div className="content">
          <Wavy backgroundColor={"#fef4e9"} invert={true} />
        </div>
      </div>
      <div className="secondary content">
        <br />
        <div className="split">
          <div className="info">
            <h2>Welcome!</h2>
            <p>
              TastySpore is here to help you learn how to grow and cook gourmet
              mushrooms such as oyster and shiitake, and lion's mane in your
              home kitchen.
            </p>
            <p>
              Mushrooms are one of the easiest and most fun foods to grow at
              home. With our easy-to-use grow kits, you can produce your first
              crop in as little as 1-2 weeks.
            </p>
          </div>
          <div className="info">
            <h2>Quality</h2>
            <p>
              We offer a wide range of fresh, organic mushrooms and exotic
              mushroom varieties as well as organic do-it-yourself gourmet
              mushroom growing kits. We guarantee our products to be free of
              harmful chemicals, pesticides, and other contaminants.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Page>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___title }) {
      edges {
        node {
          ...ProductFrontmatter
        }
      }
    }
  }
`
