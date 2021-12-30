import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { PIInterface } from "../../../context"
import "./CartItem.scss"

export default function CartItem({ item }: { item: PIInterface }) {
  return (
    <div className="item">
      <div className="flex">
        <GatsbyImage image={getImage(item.data.image)} alt={item.data.title} />
        <div className="info">
          <h2>{item.data.title}</h2>
          <p className="price">${item.data.price.msrp}</p>
          <p className="size">
            {item.data.size[0]} : {item.data.weight}lbs
          </p>
          <div className="quantity">Quantity: {item.quantity}</div>
        </div>
      </div>
    </div>
  )
}
