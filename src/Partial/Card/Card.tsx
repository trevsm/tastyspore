import React from "react"
import { Image, Price } from "../../interface"
import "./Card.scss"

export default function Card({
  title,
  summary,
  logo,
  price,
}: {
  title: string
  summary: string
  logo: Image
  price: Price
}) {
  return (
    <div className="blob card">
      <section>
        <div className="flex">
          <div className="image">
            <img
              src={logo.source}
              alt={title}
              style={{ maxWidth: logo.width }}
            />
          </div>
          <div className="text">
            <h2>{title}</h2>
            <p className="summary">{summary}</p>
            <div className="bottom">
              {price.sale ? (
                <p className="sale">
                  <span className="cross">${price.msrp}</span>
                  <span className="cost">${price.sale}</span>
                </p>
              ) : (
                <span className="cost">{price.msrp}</span>
              )}
              <p className="more-info">
                more info <span>+</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
