import React, { ReactNode, useState } from "react"
import Notice from "../Notice/Notice"
import "minireset.css"
import "./Page.scss"
import Footer from "../Footer/Footer"

interface ChildrenInterface {
  children: ReactNode | ReactNode[]
}

function Page({ children }: ChildrenInterface) {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="App">
      {/* <Notice /> */}
      <div className={"page"}>
        {children}
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export { Page }
