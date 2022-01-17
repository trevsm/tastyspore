import React, { useState, useRef } from "react"
import { PIInterface } from "types"
import { animated, useSpring } from "react-spring"
import { useLocalStorage, useEventListener } from "usehooks-ts"
import { ProductFrontmatterFragment } from "types/gatsby-graphql"

export default function Notification({ d }: { d: any }) {
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
    }, 3000)
  })

  let itemCount = 0
  items && items.forEach((e) => (itemCount += e.quantity))

  const lastItem = items && items.length ? items[items.length - 1] : null
  const maxQuantity =
    lastItem && data
      ? data.frontmatter.inventory.filter((e) => e.size == lastItem.size)[0]
          .quantity
      : 0
  const name =
    data.frontmatter.readable_class + " " + data.frontmatter.readable_category

  return (
    items &&
    items.length > 0 && (
      <animated.div
        style={notificationSpring}
        className="notification-popup shadow"
      >
        <p>
          Added {name} to your cart. 🎉
          <br />
          {lastItem?.quantity == maxQuantity && (
            <span className="max-10">[Max: {lastItem?.quantity}]</span>
          )}
        </p>
      </animated.div>
    )
  )
}
