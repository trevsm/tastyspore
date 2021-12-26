import React, { ReactNode, useMemo, useState } from "react"
import { Routes, Route } from "react-router-dom"
import { Navigation } from "../Components"
import Notice from "../Components/Notice/Notice"
import { FocusPopContext } from "../Context"
// import Footer from "../Components/Footer/Footer"
import { Home, Shop } from "../Pages"
import "./App.scss"

function CTXWrapper({ children }: { children: ReactNode | ReactNode[] }) {
  const [focusId, setFocusId] = useState("")

  const value = useMemo(() => ({ focusId, setFocusId }), [focusId])

  return (
    <FocusPopContext.Provider value={value}>
      {children}
    </FocusPopContext.Provider>
  )
}

function App() {
  return (
    <CTXWrapper>
      <div className="App">
        <Notice />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Navigation />
      </div>
    </CTXWrapper>
  )
}

export default App
