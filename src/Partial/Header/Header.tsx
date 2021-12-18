import React from "react"
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
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </div>
  )
}
