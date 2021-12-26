import React, { useContext } from "react"
import { FocusPopContext } from "../../Context"
import getItem from "../../Data/getItem"
// import { Image } from "../../interface"
import "./FocusPopup.scss"

export default function FocusPopup({
  id,
  open,
}: {
  id: string
  open: boolean
}) {
  const item = getItem(id)[0]
  const { setFocusId } = useContext(FocusPopContext)

  return (
    <div className={"focus-popup" + (open ? " open" : "")}>
      <button
        className="close"
        onClick={() => {
          setFocusId("")
        }}
      >
        (close)
      </button>
      <h1>{item.title}</h1>
      <div className="image">
        <img
          src={item.logo.source}
          alt={item.title}
          style={{ maxWidth: item.logo.lg_width }}
        />
      </div>
    </div>
  )
}
