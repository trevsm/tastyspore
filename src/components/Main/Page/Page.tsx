import React, { ReactNode, useContext, useMemo, useState } from "react"
import { FPContext, FPWrapper } from "../../../context" // focus pop context wrapper
import Navigation from "../Navigation/Navigation"
import Notice from "../Notice/Notice"
import "minireset.css"
import "./Page.scss"

interface ChildrenInterface {
  children: ReactNode | ReactNode[]
}

function PageWrappers({ children }: ChildrenInterface) {
  return <FPWrapper>{children}</FPWrapper>
}

function Page({ children }: ChildrenInterface) {
  const { focusId } = useContext(FPContext)

  return (
    <div className="App">
      {/* <Notice /> */}
      <div className={"page" + (focusId ? " hide-overflow" : "")}>
        {children}
      </div>
      <Navigation />
    </div>
  )
}

export { Page, PageWrappers }
