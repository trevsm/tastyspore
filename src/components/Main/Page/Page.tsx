import React, { ReactNode, useContext, useMemo, useState } from "react"
import { CCWrapper, FPContext, FPWrapper } from "../../../context" // focus pop context wrapper
import Navigation from "../Navigation/Navigation"
import Notice from "../Notice/Notice"
import CartTab from "../../MyCart/CartTab"
import "minireset.css"
import "./Page.scss"
import Footer from "../Footer/Footer"
// import { animated, useSpring } from "react-spring"

interface ChildrenInterface {
  children: ReactNode | ReactNode[]
}

function PageWrappers({ children }: ChildrenInterface) {
  return (
    <FPWrapper>
      <CCWrapper>{children}</CCWrapper>
    </FPWrapper>
  )
}

function Page({ children }: ChildrenInterface) {
  const { focusId } = useContext(FPContext)
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="App">
      <Notice />
      <CartTab open={cartOpen} setOpen={setCartOpen} />
      <div className={"page" + (focusId ? " hide-overflow" : "")}>
        {children}
        <Footer />
      </div>
      <Navigation />
    </div>
  )
}

export { Page, PageWrappers }
