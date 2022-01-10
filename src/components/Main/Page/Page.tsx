import React, { ReactNode } from "react"
import "minireset.css"
import "./Page.scss"
import Navigation from "../Navigation/Navigation"

function Page({
  children,
  navigation,
}: {
  children: ReactNode | ReactNode[]
  navigation: { home?: boolean; cart?: boolean }
}) {
  return (
    <div className="App">
      <div className={"page"}>
        <Navigation navigation={navigation} />
        {children}
      </div>
    </div>
  )
}

export { Page }
