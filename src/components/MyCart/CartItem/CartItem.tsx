import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Trash from "../../icons/Trash"
import { PIInterface } from "../../../context"
import "./CartItem.scss"

export default function CartItem({
  item,
  removeItem,
}: {
  item: PIInterface
  removeItem: (id: string, size: string) => void
}) {
  return (
    <div className="item">
      <div className="flex">
        <GatsbyImage image={getImage(item.data.image)} alt={item.data.title} />
        <div className="info">
          <h2>{item.data.title}</h2>
          <p className="price">${item.data.price.msrp}</p>
          <div className="quantity">Quantity: {item.quantity}</div>
          <p className="size">
            {item.data.size[0]} : {item.data.weight}lbs
          </p>
          <button
            className="delete"
            onClick={() => {
              removeItem(item.data.id, item.data.size)
            }}
          >
            <Trash color="#f36766" width={30} />
          </button>
        </div>
      </div>
    </div>
  )
}
