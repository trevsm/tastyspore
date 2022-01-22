import React from "react"
import { useTrail, animated, config } from "react-spring"

export const Trail: React.FC<{
  open: boolean
  animation: "fade" | "shift"
  tension: number
}> = ({ open, children, animation, tension }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: config.gentle,
    opacity: open ? 1 : 0,
    transform:
      animation == "shift"
        ? open
          ? "translateY(0)"
          : "translateY(20px)"
        : "unset",
  })
  return (
    <>
      {trail.map(({ ...style }, index) => (
        <animated.div style={style} key={index}>
          <animated.div>{items[index]}</animated.div>
        </animated.div>
      ))}
    </>
  )
}
