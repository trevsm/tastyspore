import React, { ReactNode } from "react"
import "./Info.scss"

export default function Info({
  title,
  subtitle,
  description,
}: {
  title: string
  subtitle: string
  description: ReactNode
}) {
  return (
    <div className="blob card info">
      <section>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <div>{description}</div>
      </section>
    </div>
  )
}
