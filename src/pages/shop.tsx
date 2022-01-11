import { graphql } from "gatsby"
import React, { useState } from "react"
import { MDXQuery } from "../../types"
import Helmet from "../components/Main/Helmet/Helmet"
import { Page } from "../components/Main/Page/Page"
import Featured from "../components/partials/Featured/Featured"

export default function Shop({ data }: { data: MDXQuery }) {
  const nodes = data.allMdx.edges
  const [sub_category, setSub_Category] = useState("all")

  const filteredNodes = nodes.filter(
    (e) =>
      e.node.frontmatter.sub_category == sub_category || sub_category == "all"
  )
  return (
    <Page navigation={{ home: true, cart: true }}>
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
      <div className="shop">
        <div className="categories">
          <button
            onClick={() => setSub_Category("all")}
            className={sub_category == "all" ? "active" : ""}
          >
            All
          </button>
          <button
            onClick={() => setSub_Category("oyster-mushroom-kit")}
            className={sub_category == "oyster-mushroom-kit" ? "active" : ""}
          >
            Oyster Grow Kits
          </button>
          <button
            onClick={() => setSub_Category("medicinal-mushroom-kit")}
            className={sub_category == "medicinal-mushroom-kit" ? "active" : ""}
          >
            Medicinal Grow Kits
          </button>
        </div>
        <div className="featured">
          <Featured nodes={filteredNodes} />
        </div>
      </div>
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
