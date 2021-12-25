import React, { useState } from "react"
import { Image, Price } from "../../interface"
import FocusPopup from "../FocusPopup/FocusPopup"
import "./Card.scss"

interface CardInterface {
  id: string
  title: string
  summary: string
  logo: Image
  price: Price
}

export default function Card({
  id,
  title,
  summary,
  logo,
  price,
}: CardInterface) {
  const [focus, setFocus] = useState(false)
  return (
    <div className="blob card">
      <FocusPopup id={id} open={focus} setFocus={setFocus} />
      <button
        onClick={() => {
          setFocus(true)
        }}
      >
        <section>
          <div className="flex">
            <div className="image">
              <img
                src={logo.source}
                alt={title}
                style={{ maxWidth: logo.sm_width }}
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
                  <span className="cost">${price.msrp}</span>
                )}
                <p className="more-info">
                  more info <span>+</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </button>
    </div>
  )
}
