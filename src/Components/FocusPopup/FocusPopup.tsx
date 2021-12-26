import React, { useContext, useEffect, useState, useRef } from "react"
import { FocusPopContext } from "../../Context"
import getItem from "../../Data/getItem"
import { readableName } from "../../Data/readableName"
import Arrow from "../../Icons/Arrow"
import IsMobile from "../../Tools/IsMobile"

import { useSpring, animated } from "react-spring"

import "./FocusPopup.scss"

export default function FocusPopup({
  id,
  open,
}: {
  id: string
  open: boolean
}) {
  // Contexts, States, & Refs
  const { setFocusId } = useContext(FocusPopContext)
  const [quantity, setQuantity] = useState(1)
  const [scrollPos, setScroll] = useState(0)
  const mainRef = useRef<HTMLDivElement | null>(null)

  // Data & Price
  const item = getItem(id)[0]
  const price = (item.price.sale ? item.price.sale : item.price.msrp) * quantity

  // React-Spring Styles
  const showStyles = useSpring(
    IsMobile()
      ? {
          transform: open ? "translateY(0%)" : "translateY(101%)",
          boxShadow: open ? "0 0 100px #0000004d" : "0 0 100px #00000000",
        }
      : {
          opacity: open ? 1 : 0,
        }
  )

  const closeBtnStyles = useSpring({
    boxShadow:
      scrollPos <= 10 ? "0px 0px 7px #00000000" : "0px 0px 7px #00000017",
  })

  // Functions
  const setScrollPos = (e: React.UIEvent) => {
    const elem = e.target as HTMLDivElement
    setScroll(elem.scrollTop)
  }

  useEffect(() => {
    setQuantity(1)
    mainRef.current?.scrollTo(0, 0)
  }, [open])

  return (
    <animated.div
      className={"focus-popup"}
      style={{ ...showStyles, pointerEvents: open ? "all" : "none" }}
      ref={mainRef}
      onScroll={setScrollPos}
    >
      <animated.button
        className="close"
        style={closeBtnStyles}
        onClick={() => {
          setFocusId("")
        }}
      >
        <Arrow color="#3e3e3e" width={20} />
      </animated.button>
      <div className="content">
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
          voluptatibus quisquam inventore obcaecati necessitatibus optio aliquam
          distinctio, deleniti, saepe debitis suscipit ad fuga aliquid assumenda
          minus. Aut animi laboriosam dolor?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          suscipit. Quasi, labore? Blanditiis alias odio cum tempore porro?
          Molestiae modi itaque eius perferendis, pariatur a perspiciatis fuga?
          Dolorem, consectetur quas!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          suscipit. Quasi, labore? Blanditiis alias odio cum tempore porro?
          Molestiae modi itaque eius perferendis, pariatur a perspiciatis fuga?
          Dolorem, consectetur quas!
        </p>
      </div>
      <div className="bottom">
        <button className="buy">Add to Cart</button>
      </div>
    </animated.div>
  )
}
