import React from "react"
import { graphql } from "gatsby"
import { MDXQuery } from "../../types"

export default function MyCart({ data }: { data: MDXQuery }) {
  console.log(data)

  return (
    <div>
      <div>asdf</div>
    </div>
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
