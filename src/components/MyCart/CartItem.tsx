import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Trash from "../icons/Trash"
import "./CartItem.scss"
import { CIInterface } from "../../../types"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { animated, useSpring } from "react-spring"

export default function CartItem({
  item,
  styles,
  removeItem,
}: {
  item: CIInterface
  styles: any
  removeItem: (id: string, size: string) => void
}) {
  const [confirmDelete, setConfirmDelete] = useState(false)

  const fade = useSpring({
    opacity: confirmDelete ? 1 : 0,
    pointerEvents: confirmDelete ? "auto" : "none",
  })

  return (
    <animated.div
      style={styles}
      className={"item"}
      tabIndex={0}
      onBlur={() => {
        setConfirmDelete(false)
      }}
    >
      <animated.div className="confirm-delete" style={fade}>
        <p>Remove this item?</p>
        <button
          onClick={() => {
            setConfirmDelete(false)
          }}
          className="no"
        >
          Cancel
        </button>
        <button
          className="yes"
          onClick={() => {
            setConfirmDelete(false)
            removeItem(item.id, item.size)
          }}
        >
          Remove
        </button>
      </animated.div>
      <div className={"flex"}>
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
              setConfirmDelete(true)
            }}
          >
            <Trash color="#f36766" width={30} />
          </button>
        </div>
      </div>
    </animated.div>
  )
}
