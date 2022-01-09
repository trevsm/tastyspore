import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Trash from "../icons/Trash"
import "./CartItem.scss"
import { CIInterface } from "../../../types"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { animated } from "react-spring"

export default function CartItem({
  item,
  styles,
  removeItem,
}: {
  item: CIInterface
  styles: any
  removeItem: (id: string, size: string) => void
}) {
  return (
    <animated.div style={styles} className="item">
      <div className="flex">
        <AniLink paintDrip hex={item.accent_color} to={"/" + item.id}>
          <GatsbyImage image={getImage(item.image)} alt={item.title} />
        </AniLink>
        <div className="info">
          <h2>{item.title}</h2>
          <p className="price">${item.price.msrp}</p>
          <div className="quantity">Quantity: {item.quantity}</div>
          <p className="size">
            {item.size[0]} : {item.weight}lbs
          </p>
          <button
            className="delete"
            onClick={() => {
              removeItem(item.id, item.size)
            }}
          >
            <Trash color="#f36766" width={30} />
          </button>
        </div>
      </div>
    </animated.div>
  )
}
