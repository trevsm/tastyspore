import React, { useState, useEffect } from "react"
import MailingList from "../../Components/Forms/MailingList"
import "./Notice.scss"

export default function Notice() {
  const [popup, setPopup] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setPopup(true)
    }, 2000)
  }, [])
  return (
    <div className="content">
      <div className={"notice" + (popup ? " show" : "")}>
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
          (hide popup)
        </button>
        <p style={{ paddingBottom: "10px" }}>
          <b>Hey!</b> You found us! &#128516; <br /> We&rsquo;re still getting
          things set up, so some pages might not work quite yet. Check back here
          soon or join our mailing list to get notified when we officially
          launch. <br /> <br /> (Enter your email below to get notified
          &#128227;)
        </p>
        <MailingList />
      </div>
    </div>
  )
}
