import React from "react"
import { graphql } from "gatsby"
import { Page } from "../components/Main/Page/Page"
import Featured from "../components/partials/Featured/Featured"
import { MDXQuery } from "../../types"
import Helmet from "../components/Main/Helmet/Helmet"
import CartIcon from "../components/MyCart/CartIcon"
import Notice from "../components/Main/Notice/Notice"
import Footer from "../components/Main/Footer/Footer"
import ShiitakeTree from "../components/Media/ShiitakeTree"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

export default function Home({ data }: { data: MDXQuery }) {
  const nodes = data.allMdx.edges
  const bp = useBreakpoint()
  const amp = () => {
    if (bp.xs) return 2
    if (bp.sm) return 3
    return 6
  }

  const points = 10
  const sinPath = (A: number, B: number, C: number, D: number) =>
    "polygon(100% 0%, 0% 0%," +
    Array(points)
      .fill(null)
      .map((_, i) => {
        const max = (i * (101 + points * 2)) / points
        return `${max}% ${A * Math.sin((max - i) * B + C) + D}%`
      })
      .join(", ") +
    ")"
  const clipStyles = {
    "--clipPath": sinPath(amp(), 0.04, 5, 90),
  } as React.CSSProperties

  return (
    <Page>
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
      <CartIcon d={data} />
      <Notice />
      <div className={"main-top"} style={clipStyles}>
        <section>
          <div className="left">
            <h1>Delicious Mushrooms & Tasty Recipies</h1>
            <p>
              Grow and cook <b>gourmet</b> mushrooms at home with confidence!
            </p>
            <button>Go Foraging!</button>
            <button>Browse Recipes</button>
            <br />
            <br />
            {!bp.xs && (
              <>
                <a href="#">
                  <span>instagra</span>m
                </a>
                <a href="#">
                  <span>faceboo</span>k
                </a>
                <a href="#">
                  <span>youtub</span>e
                </a>
              </>
            )}
          </div>
          <div className="right">
            <ShiitakeTree />
          </div>
        </section>
      </div>
      <div className="content">
        <br />
        <div className="split">
          <Featured nodes={nodes} />
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
