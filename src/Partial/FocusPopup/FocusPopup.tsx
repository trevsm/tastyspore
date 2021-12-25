import React, { Dispatch, SetStateAction } from "react"
import getItem from "../../data/getItem"
// import { Image } from "../../interface"
import "./FocusPopup.scss"

export default function FocusPopup({
  id,
  open,
  setFocus,
}: {
  id: string
  open: boolean
  setFocus: Dispatch<SetStateAction<boolean>>
}) {
  const item = getItem(id)[0]

  return (
    <div className={"focus-popup" + (open ? " open" : "")}>
      <button
        className="close"
        onClick={() => {
          setFocus(false)
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
