import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
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

  const { items, setItems } = useContext(CartContext)

  const sub_total = !items
    ? 0
    : items
        .map((e) => e.quantity * e.data.price.msrp)
        .reduce((a, b) => a + b, 0)
  const sales_tax = +(sub_total * 0.16).toFixed(2)
  const total = (sales_tax + sub_total).toFixed(2)

  const [cartAnimate, setCartAnimate] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [showNav, setShowNav] = useState(false)

  const cartTimeoutRef = useRef(null)
  const notifyTimeoutRef = useRef(null)

  const notificationSpring = useSpring({
    transform: !showNotification ? "translateY(-101%)" : "translateY(0%)",
    opacity: showNotification ? 1 : 0,
  })
  const navStyle = useSpring({
    transform: !showNav ? "translateY(101%)" : "translateY(0%)",
  })

  const removeItem = (id: string, size: string) => {
    setItems((prev) => {
      return prev.filter((e) => e.data.id + e.data.size !== id + size)
    })
  }

  useEffect(() => {
    setCartAnimate(true)
    clearTimeout(cartTimeoutRef.current)
    cartTimeoutRef.current = setTimeout(() => {
      setCartAnimate(false)
    }, 200)

    if (items && !open) {
      setShowNotification(true)
      clearTimeout(notifyTimeoutRef.current)
      notifyTimeoutRef.current = setTimeout(() => {
        setShowNotification(false)
      }, 2000)
    }
    if (items && items.length) {
      setShowNav(true)
    } else {
      setShowNav(false)
    }
  }, [items])

  const lastItem = items ? items[items.length - 1] : null

  return (
    <>
      <button
        className={"cart-icon" + (cartAnimate ? " animate" : "")}
        onClick={() => {
          setOpen(true)
        }}
      >
        {items && items.length ? (
          <span className="item-count">
            {items.length <= 9 ? items.length : "+"}
          </span>
        ) : (
          ""
        )}
        <Cart color="#545485" width={30} />
      </button>
      {!open && items && (
        <animated.div style={notificationSpring} className="notification-popup">
          <p>
            Added [{lastItem?.data?.title}] to your cart!{" "}
            {lastItem?.quantity == lastItem?.data?.quantity && (
              <span className="max-10">[Max: {lastItem?.data?.quantity}]</span>
            )}
          </p>
        </animated.div>
      )}
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
          {items && items.length ? (
            items.map((e, idx) => (
              <CartItem item={e} removeItem={removeItem} key={idx} />
            ))
          ) : (
            <div className="no-items">
              <Cart color="#dddddd" width={150} />
              <p>No Items In Cart</p>
            </div>
          )}
        </section>
        <animated.div className="nav" style={navStyle}>
          <p className="sub">
            Sub total: <span>${sub_total}</span>
          </p>
          <p className="sub">
            Tax: <span>${addZeroes(sales_tax + "")}</span>
          </p>
          <p className="price">
            Total: <span>${total}</span>
          </p>
          <button
            onClick={() => {
              alert(
                "Thank you for your interest! Orders are currently disabled until we officially launch. Check back here soon for updates!"
              )
            }}
          >
            Continue to shipping
          </button>
        </animated.div>
      </animated.div>
    </>
  )
}
