import React, { ReactNode, useMemo, useState } from "react"
import "minireset.css"
import "./Page.scss"
import { FocusPopContext } from "../../context"
import Navigation from "../Navigation/Navigation"
import Notice from "../Notice/Notice"

function CTXWrapper({ children }: { children: ReactNode | ReactNode[] }) {
  const [focusId, setFocusId] = useState("")

  const value = useMemo(() => ({ focusId, setFocusId }), [focusId])

  return (
    <FocusPopContext.Provider value={value}>
      {children}
    </FocusPopContext.Provider>
  )
}

function Page({ children }: { children: ReactNode | ReactNode[] }) {
  return (
    <CTXWrapper>
      <div className="App">
        <Notice />
        <div className="page">{children}</div>
        <Navigation />
      </div>
    </CTXWrapper>
  )
}

export default Page
