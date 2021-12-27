import React from "react"
import { Card } from ".."
import { ProductFrontmatterFragment } from "../../../../types/gatsby-graphql"

export default function Featured({ nodes }: { nodes: any }) {
  return nodes.map((data: ProductFrontmatterFragment, idx: number) => {
    const d = JSON.parse(JSON.stringify(data))
    const featured = d.node.frontmatter.featured

    return featured && <Card key={idx} data={d.node} />
  })
}
