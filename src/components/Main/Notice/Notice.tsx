import React, { useState, useEffect } from "react"
import MailingList from "../../Forms/MailingList"
import { animated, useSpring } from "react-spring"

import "./Notice.scss"

export default function Notice() {
  const [popup, setPopup] = useState(false)

  const styles = useSpring({
    opacity: popup ? 1 : 0,
  })

  useEffect(() => {
    setTimeout(() => {
      setPopup(true)
    }, 2000)
  }, [])

  return (
    <div className="content" style={{ pointerEvents: popup ? "all" : "none" }}>
      <animated.div className={"notice"} style={styles}>
        <button
          style={{
            position: "absolute",
            right: "0",
            top: "0",
            padding: "10px",
            opacity: ".5",
            background: "none",
            border: "none",
            fontSize: "15px",
            color: "inherit",
            cursor: "pointer",
          }}
          onClick={() => {
            setPopup(false)
          }}
        >
          (close)
        </button>
        <p style={{ paddingBottom: "10px" }}>
          <b style={{ fontSize: "20px" }}>Hey!</b> &#128516; <br /> We&rsquo;re
          still getting things set up, so some pages might not work quite yet.
          Check back here soon or join our mailing list to get notified when we
          officially launch. <br /> <br /> (Enter your email below to get
          notified &#128227;)
        </p>
        <MailingList />
      </animated.div>
    </div>
  )
}
