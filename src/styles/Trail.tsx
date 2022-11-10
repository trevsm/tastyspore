import React from "react"
import { useTrail, animated, config, useSpring } from "react-spring"

export const Trail: React.FC<{
  open: boolean
  animation: "fade" | "shift"
  map?: boolean
  config?: keyof typeof config
}> = ({ open, children, animation, map, config }) => {
  const items = React.Children.toArray(children)

  const transform =
    animation == "shift"
      ? open
        ? "translateY(0)"
        : "translateY(20px)"
      : "unset"

  const styles = useSpring({
    config,
    opacity: open ? 1 : 0,
    transform,
  })
  const trail = useTrail(items.length, {
    config,
    opacity: open ? 1 : 0,
    transform,
  })

  if (map)
    return (
      <>
        {trail.map(({ ...style }, index) => (
          <animated.div style={style} key={index}>
            <animated.div>{items[index]}</animated.div>
          </animated.div>
        ))}
      </>
    )

  return (
    <animated.div style={styles}>
      <div>{children}</div>
    </animated.div>
  )
}
