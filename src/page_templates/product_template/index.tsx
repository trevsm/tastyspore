import React from "react"
import { graphql } from "gatsby"
import { Page } from "../../components/Main/Page/Page"
import { Template } from "./Template"
import CartIcon from "../../components/MyCart/CartIcon"

export default function Main({ data }: { data: any }) {
  return (
    <Page>
      <CartIcon d={data} />
      <Template d={data} />
    </Page>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(frontmatter: { id: { eq: $id } }) {
      ...ProductFrontmatter
    }
  }
`
