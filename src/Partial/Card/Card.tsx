import React from "react"
import "./Card.scss"
import Cart from "../../Icons/Cart"

export default function Card({
  title,
  description,
  imageSrc,
  imageWidth,
  price,
}: {
  title: string
  description: string
  imageSrc: string
  imageWidth: number
  price: { msrp: string; sale?: string }
}) {
  return (
    <div className="blob card">
      <section>
        <div className="flex">
          <div>
            <h2>{title}</h2>
            <p className="description">{description}</p>
          </div>
          <div>
            <img src={imageSrc} alt={title} style={{ maxWidth: imageWidth }} />
          </div>
        </div>
        <div className="next">
          {price.sale ? (
            <>
              <span className="cross">{price.msrp}</span>
              <span className="sale">{price.sale}</span>
            </>
          ) : (
            <span className="sale">{price.msrp}</span>
          )}
          <div className="cart">
            <Cart color="#545485" />
          </div>
        </div>
      </section>
    </div>
  )
}
