import React, { ReactNode, useMemo, useState } from "react"
import { FPWrapper } from "../../../context" // focus pop context wrapper
import Navigation from "../Navigation/Navigation"
import Notice from "../Notice/Notice"
import "minireset.css"
import "./Page.scss"

function Page({ children }: { children: ReactNode | ReactNode[] }) {
  return (
    <FPWrapper>
      <div className="App">
        <Notice />
        <div className="page">{children}</div>
        <Navigation />
      </div>
    </FPWrapper>
  )
}

export default Page
