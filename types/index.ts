import { ProductFrontmatterFragment } from "./gatsby-graphql"

interface MDXQuery {
  allMdx: {
    edges: {
      node: {
        frontmatter: ProductFrontmatterFragment
      }
    }[]
  }
}

export type { MDXQuery }
