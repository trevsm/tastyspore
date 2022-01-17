import React from "react"
import { graphql } from "gatsby"
import { Page } from "src/components/Main/Page/Page"
import { Template } from "./Template"
import Notification from "src/components/MyCart/Notification"

export default function Main({ data }: { data: any }) {
  return (
    <Page navigation={{ cart: true, home: true }}>
      <Notification d={data} />
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
