import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "./Navigation.scss"
import Home from "../../icons/Home"
import { useLocalStorage } from "usehooks-ts"
import { PIInterface } from "../../../../types"
import ClientRender from "../../../tools/ClientRender"
import Cart from "../../icons/Cart"

export default function Navigation({
  navigation,
}: {
  navigation: {
    home?: boolean
    cart?: boolean
  }
}) {
  const [items, _] = useLocalStorage<PIInterface[]>("my_cart", null)
  if (navigation)
    return (
      <div className="navigation content">
        <div className="flex">
          <div className={!navigation.home ? "disabled" : ""}>
            <AniLink paintDrip hex="#eef6ff" to="/" className="icon-link home">
              <Home color="#3e3e3e" width={35} />
            </AniLink>
          </div>
          <div className={!navigation.cart ? "disabled" : ""}>
            <ClientRender>
              <AniLink
                paintDrip
                hex="#fbfbfb"
                to="/checkout"
                className="icon-link cart"
              >
                {items && items.length ? (
                  <span className="item-count"></span>
                ) : (
                  ""
                )}
                <Cart color="#3e3e3e" width={30} />
              </AniLink>
            </ClientRender>
          </div>
        </div>
      </div>
    )
  return null
}
