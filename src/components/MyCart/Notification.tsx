import React, { useState, useRef } from "react"
import { PIInterface } from "types"
import { animated, useSpring } from "react-spring"
import { useLocalStorage, useEventListener } from "usehooks-ts"
import { ProductFrontmatterFragment } from "types/gatsby-graphql"
import styled from "styled-components"

const NotificationStyles = styled(animated.div)`
  position: fixed;
  z-index: 20;
  top: 0;
  padding: 20px;
  background: #fffdfc;
  border-top: 0;
  right: 0;
  left: 0;
  border-radius: 0 0 20px 20px;
  text-align: center;
  font-size: 20px;
  box-shadow: 1px 1px 3px #e3e3e3;
  .max-10 {
    color: $pink;
  }
`

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
    }, 1500)
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
      <NotificationStyles style={notificationSpring}>
        <p>
          Added {name} to your cart. 🎉
          <br />
          {lastItem?.quantity == maxQuantity && (
            <span className="max-10">[Max: {lastItem?.quantity}]</span>
          )}
        </p>
      </NotificationStyles>
    )
  )
}
