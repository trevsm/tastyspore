import React from "react"
import { Helmet as H } from "react-helmet"

export default function Helmet({
  title,
  description,
  keywords,
}: {
  title: string
  description: string
  keywords: string[]
}) {
  return (
    <H>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <link rel="canonical" href="https://tastyspore.com/" />
    </H>
  )
}
