import React from "react"
import { graphql } from "gatsby"
import { Page } from "../components/Main/Page/Page"
import Featured from "../components/partials/Featured/Featured"
import { MDXQuery } from "../../types"
import Helmet from "../components/Main/Helmet/Helmet"
import CartIcon from "../components/MyCart/CartIcon"
import Notice from "../components/Main/Notice/Notice"
import Footer from "../components/Main/Footer/Footer"

export default function Home({ data }: { data: MDXQuery }) {
  const nodes = data.allMdx.edges
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
      <div className="main-top">
        <section>
          <br />
          <br />
          <h1>
            Delicious mushrooms <br />& tasty recipes.
          </h1>
          <p>
            Our kits are designed to be easy to use, and contain a complete list
            of what you will need to get started.
            <br /> <br />
            With a <b>100% guarantee</b>, we are confident you will love our
            mushrooms as much as we do!
          </p>
        </section>
      </div>
      <svg width="0" height="0">
        <defs>
          <clipPath id="myCurve" clipPathUnits="objectBoundingBox">
            <path
              d="M 0,1
									L 0,0
									L 1,0
									L 1,.9
									C .9 1, .35 .8, 0 .9
									Z"
            />
          </clipPath>
        </defs>
      </svg>
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
