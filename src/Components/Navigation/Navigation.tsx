import React from "react"
import { NavLink } from "react-router-dom"

import "./Navigation.scss"

export default function Navigation() {
  return (
    <div className="navigation content">
      <nav>
        <div className="blob link">
          <NavLink to="/">
            <section>Shop</section>
          </NavLink>
        </div>
        <div className="blob link">
          <NavLink to="/">
            <section>Log In</section>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}
