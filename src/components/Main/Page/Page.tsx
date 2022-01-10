import React, { ReactNode } from "react"
import "minireset.css"
import "./Page.scss"

interface ChildrenInterface {
  children: ReactNode | ReactNode[]
}

function Page({ children }: ChildrenInterface) {
  return (
    <div className="App">
      <div className={"page"}>
        {children}
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export { Page }
