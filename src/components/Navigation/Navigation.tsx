import React from "react"

import "./Navigation.scss"

export default function Navigation() {
  return (
    <div className="navigation content">
      <nav>
        <div className="blob link shop">
          <section>Shop</section>
        </div>
        <div className="blob link login">
          <section>Log In</section>
        </div>
      </nav>
    </div>
  )
}
