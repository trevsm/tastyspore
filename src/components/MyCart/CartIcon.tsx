import React, { useEffect, useState, useRef } from "react"
import { Link } from "gatsby"
import { PIInterface } from "../../../types"
import Cart from "../icons/Cart"
import { animated, useSpring } from "react-spring"
import { useLocalStorage, useEventListener } from "usehooks-ts"
import { ProductFrontmatterFragment } from "../../../types/gatsby-graphql"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import ClientRender from "../../tools/ClientRender"

export default function CartIcon({ d }: { d: any }) {
  const data: ProductFrontmatterFragment = d?.mdx

  const [items, _] = useLocalStorage<PIInterface[]>("my_cart", null)
  const [showNotification, setShowNotification] = useState(false)
  const notificationTimeout = useRef(null)

  const notificationSpring = useSpring({
    transform: !showNotification ? "translateY(-101%)" : "translateY(0%)",
    opacity: showNotification ? 1 : 0,
  })

  useEventListener("local-storage", () => {
    if (!showNotification) setShowNotification(true)

    clearTimeout(notificationTimeout.current)
    notificationTimeout.current = setTimeout(() => {
      setShowNotification(false)
    }, 2000)
  })

  let itemCount = 0
  items && items.forEach((e) => (itemCount += e.quantity))

  const lastItem = items && items.length ? items[items.length - 1] : null
  const maxQuantity =
    lastItem && data
      ? data.frontmatter.inventory.filter((e) => e.size == lastItem.size)[0]
          .quantity
      : 0

  return (
    <ClientRender>
      {items && items.length > 0 && (
        <animated.div style={notificationSpring} className="notification-popup">
          <p>
            Added [{lastItem.id}] to your cart!{" "}
            {lastItem?.quantity == maxQuantity && (
              <span className="max-10">[Max: {lastItem?.quantity}]</span>
            )}
          </p>
        </animated.div>
      )}
      <AniLink paintDrip hex="#fbfbfb" to="/my_cart" className={"cart-icon"}>
        {items && items.length ? <span className="item-count"></span> : ""}
        <Cart color="#3e3e3e" width={30} />
      </AniLink>
    </ClientRender>
  )
}
