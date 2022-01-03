import React, { ReactNode, useState } from "react"
import { CCWrapper } from "../../../context" // focus pop context wrapper
import Notice from "../Notice/Notice"
import CartTab from "../../MyCart/CartTab"
import "minireset.css"
import "./Page.scss"
import Footer from "../Footer/Footer"

interface ChildrenInterface {
  children: ReactNode | ReactNode[]
}

function PageWrappers({ children }: ChildrenInterface) {
  return <CCWrapper>{children}</CCWrapper>
}

function Page({ children }: ChildrenInterface) {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="App">
      {/* <Notice /> */}
      <CartTab open={cartOpen} setOpen={setCartOpen} />
      <div className={"page"}>
        {children}
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export { Page, PageWrappers }
