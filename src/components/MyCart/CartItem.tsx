import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Trash from "src/components/icons/Trash"
import "./CartItem.scss"
import { CIInterface } from "types"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"
import { Link } from "src/styles"

const ItemStyles = styled(animated.div)`
  position: relative;
  background: white;
  padding: 15px;
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 6%) 2px 1px 7px;
  margin-bottom: 20px;
  button {
    cursor: pointer;
  }
  a {
    margin-right: 20px;
    width: 100px;
  }
  img {
    width: 70px;
  }
  .flex {
    display: flex;
  }
  .size {
    text-transform: capitalize;
    color: #b1b1b1;
    position: absolute;
    top: 0;
    right: 0;
    padding: 15px;
  }
  .price {
    margin-bottom: 10px;
  }
  button.delete {
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 12px;
    padding: 0;
  }
  .confirm-delete {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;

    border-radius: 20px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    p,
    button {
      color: white;
      font-size: 18px;
    }
    p {
      width: 100%;
      color: #313439;
      text-align: center;
    }

    .no,
    .yes {
      padding: 10px;
      height: 100%;
    }
    .no {
      background-color: white;
      color: #313439;
      border-left: 2px solid #f7f7f7;
    }
    .yes {
      background-color: #f36766;
      border-radius: 0 20px 20px 0;
    }
  }
`

export default function CartItem({
  item,
  styles,
  removeItem,
  setItemQuantity,
}: {
  item: CIInterface
  styles: any
  removeItem: (id: string, size: string) => void
  setItemQuantity: (item: CIInterface, newQuantity: number) => void
}) {
  const [confirmDelete, setConfirmDelete] = useState(false)

  const fade = useSpring({
    opacity: confirmDelete ? 1 : 0,
    pointerEvents: confirmDelete ? "all" : "none",
  })

  return (
    <ItemStyles
      style={styles}
      className={"item"}
      tabIndex={0}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setConfirmDelete(false)
        }
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
        <Link transitionColor={item.accent_color} to={"/" + item.id}>
          <GatsbyImage image={getImage(item.image)} alt={item.title} />
        </Link>
        <div className="info">
          <h2>{item.title}</h2>
          <p className="price">${item.price.msrp}</p>
          <div className="quantity">
            <button
              className="add"
              onClick={() =>
                setItemQuantity(
                  item,
                  item.quantity < 10 ? item.quantity + 1 : 10
                )
              }
            >
              +
            </button>
            <span className="num">{item.quantity}</span>
            <button
              className="minus"
              onClick={() => {
                if (item.quantity - 1 == 0) {
                  setConfirmDelete(true)
                } else {
                  setItemQuantity(
                    item,
                    item.quantity > 1 ? item.quantity - 1 : 1
                  )
                }
              }}
            >
              -
            </button>
          </div>
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
    </ItemStyles>
  )
}
