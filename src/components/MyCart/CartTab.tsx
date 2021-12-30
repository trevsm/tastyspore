import React, { Dispatch, SetStateAction, useContext } from "react"
import { animated, useSpring } from "react-spring"
import Cart from "../icons/Cart"
import Arrow from "../icons/Arrow"
import "./CartTab.scss"
import { CartContext, PIInterface } from "../../context"
import CartItem from "./CartItem/CartItem"

function addZeroes(num: string) {
  const dec = num.split(".")[1]
  const len = dec && dec.length > 2 ? dec.length : 2
  return Number(num).toFixed(len)
}

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

  const sub_total = !items
    ? 0
    : items
        .map((e) => e.quantity * e.data.price.msrp)
        .reduce((a, b) => a + b, 0)
  const sales_tax = +(sub_total * 0.16).toFixed(2)
  const total = (sales_tax + sub_total).toFixed(2)

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
        <Cart color="#545485" width={30} />
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
          {!items ? (
            <div className="no-items">
              <Cart color="#dddddd" width={150} />
              <p>No Items In Cart</p>
            </div>
          ) : (
            items.map((e, idx) => <CartItem item={e} key={idx} />)
          )}
        </section>
        {items && (
          <div className="nav">
            <p className="sub">
              Sub total: <span>${sub_total}</span>
            </p>
            <p className="sub">
              Tax: <span>${addZeroes(sales_tax + "")}</span>
            </p>
            <p className="price">
              Total: <span>${total}</span>
            </p>
            <button>Continue to shipping</button>
          </div>
        )}
      </animated.div>
    </>
  )
}
