import React, { ReactNode, useEffect, useState } from "react"
import Notice from "../Notice/Notice"
import "minireset.css"
import "./Page.scss"
import Footer from "../Footer/Footer"

interface ChildrenInterface {
  children: ReactNode | ReactNode[]
}

function Page({ children }: ChildrenInterface) {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    isClient && (
      <div className="App">
        <div className={"page"}>
          {children}
          {/* <Footer /> */}
        </div>
      </div>
    )
  )
}

export { Page }
