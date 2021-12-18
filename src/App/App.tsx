import React from "react"
import { Routes, Route } from "react-router-dom"
import { Navigation } from "../Components"
// import Footer from "../Components/Footer/Footer"
import { Home, Shop } from "../Pages"
import "./App.scss"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Navigation />
    </div>
  )
}

export default App
