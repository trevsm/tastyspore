import React from "react"
import "./Footer.scss"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className="footer">
      <div className="content">
        <div className="copy">
          {year} all rights reserved. Site by Company Inc.
        </div>
      </div>
    </div>
  )
}
