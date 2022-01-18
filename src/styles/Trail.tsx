import React from "react"
import { useTrail, a } from "react-spring"

export const Trail: React.FC<{
  open: boolean
  animation: "fade" | "shift"
  tension: number
}> = ({ open, children, animation, tension }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension, friction: 100 },
    opacity: open ? 1 : 0,
    transform:
      animation == "shift"
        ? open
          ? "translateX(0)"
          : "translateX(100px)"
        : "unset",
    from: { opacity: 0 },
  })
  return (
    <>
      {trail.map(({ ...style }, index) => (
        <a.div style={style} key={index}>
          <a.div>{items[index]}</a.div>
        </a.div>
      ))}
    </>
  )
}
