import React from "react"
import { H2, H3 } from "src/styles"
import "./Header.scss"

export default function Header({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  return (
    <div className="header">
      <H2>{title}</H2>
      <H3>{subtitle}</H3>
    </div>
  )
}
