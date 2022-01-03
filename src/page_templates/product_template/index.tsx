import React from "react"
import { graphql } from "gatsby"
import { Page } from "../../components/Main/Page/Page"
import { Template } from "./Template"

export default function Main({ data }: { data: any }) {
  return (
    <Page>
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
