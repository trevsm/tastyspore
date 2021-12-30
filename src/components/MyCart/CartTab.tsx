import React, { Dispatch, SetStateAction, useContext } from "react"
import { animated, useSpring } from "react-spring"
import Cart from "../icons/Cart"
import Arrow from "../icons/Arrow"
import "./CartTab.scss"
import { CartContext } from "../../context"

export default function CartTab({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) {
  const showSpring = useSpring({
    transform: !open ? "translateX(101%)" : "translateX(0%)",
    boxShadow: !open
      ? "rgb(0 0 0 / 0%) 0px 0px 100px"
      : "rgb(0 0 0 / 30%) 0px 0px 100px",
  })

  const { items } = useContext(CartContext)

  return (
    <>
      <button
        className={"cart-icon"}
        onClick={() => {
          setOpen(true)
        }}
      >
        {items && (
          <span className="item-count">
            {items.length <= 9 ? items.length : "+"}
          </span>
        )}
        <Cart color="#545485" />
      </button>
      <animated.div className="cart-tab" style={showSpring}>
        <button
          className="back-button"
          onClick={() => {
            setOpen(false)
          }}
        >
          <Arrow color="#3e3e3e" width={20} />
        </button>
        <h3 className="cart">My Cart</h3>
        <section>
          {!items
            ? "none"
            : items.map((e, idx) => (
                <div className="item" key={idx}>
                  <div className="image"></div>
                  <div className="info">
                    <h2>Title: {e.data.title}</h2>
                    <p className="price">Price: ${e.data.price.msrp}</p>
                    <p className="size">Size: {e.data.size}</p>
                  </div>
                  <div className="quantity">Quantity: {e.quantity}</div>
                </div>
              ))}
        </section>
        <div className="nav">
          <p className="price">
            Total: $
            {!items
              ? 0
              : items
                  .map((e) => e.quantity * e.data.price.msrp)
                  .reduce((a, b) => a + b, 0)}
          </p>
          <button>checkout</button>
        </div>
      </animated.div>
    </>
  )
}
