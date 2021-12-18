import React from "react"
import "./Card.scss"

export default function Card({
  title,
  description,
  imageSrc,
}: {
  title: string
  description: string
  imageSrc?: string
}) {
  return (
    <div className="blob card">
      <section>
        <div>
          <h2>{title}</h2>
          <p className="description">{description}</p>
        </div>
        <div>
          <img src={imageSrc} alt={title} />
        </div>
      </section>
    </div>
  )
}
