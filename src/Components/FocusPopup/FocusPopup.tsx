import React, { useContext, useEffect, useState } from "react"
import { FocusPopContext } from "../../Context"
import getItem from "../../Data/getItem"
import { readableName } from "../../Data/readableName"
import Arrow from "../../Icons/Arrow"
import "./FocusPopup.scss"

export default function FocusPopup({
  id,
  open,
}: {
  id: string
  open: boolean
}) {
  const { setFocusId } = useContext(FocusPopContext)
  const [quantity, setQuantity] = useState(1)

  const item = getItem(id)[0]
  const price = (item.price.sale ? item.price.sale : item.price.msrp) * quantity

  useEffect(() => {
    setQuantity(1)
  }, [open])

  return (
    <div className={"focus-popup" + (open ? " open" : "")}>
      <button
        className="close"
        onClick={() => {
          setFocusId("")
        }}
      >
        <Arrow color="#3e3e3e" width={20} />
      </button>
      <div className="image">
        <img
          src={item.logo.source}
          alt={item.title}
          style={{ maxWidth: item.logo.lg_width }}
        />
      </div>
      <h3>{readableName(item.category)}</h3>
      <h1>{readableName(item.class)}</h1>
      <div className="quantity-and-price">
        <div className="quantity">
          <button
            className="add"
            onClick={() => {
              setQuantity((prev) => (prev < 10 ? prev + 1 : 10))
            }}
          >
            +
          </button>
          <span className="num">{quantity}</span>
          <button
            className="minus"
            onClick={() => {
              setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
            }}
          >
            -
          </button>
        </div>
        <p className="price">${price}</p>
      </div>
      <p className="full-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut inventore
        reiciendis tempora sint facere soluta velit, ipsum iusto tempore optio
        excepturi...
      </p>
      <button className="buy">Add to Cart</button>
    </div>
  )
}
