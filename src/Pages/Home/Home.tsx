import React from "react"
import { Logo } from "../../Components"
import { Header, Block } from "../../Partial"
import Featured from "../../Partial/Featured/Featured"

export default function Home() {
  return (
    <div className="page">
      <div className="content">
        <div className="top">
          <Logo />
        </div>
        <Header title="Today's Featured:" subtitle="" />
        <br />
        <div className="split">
          <Featured />
        </div>
        <hr />
        <Header title="Introduction:" subtitle="Welcome to TastySpore!" />
        <br />
        <div className="split">
          <Block>
            <p>
              The only thing better than eating mushrooms is growing them
              yourself. Our Mushrooms grow kits are the best kits available for
              growing gourmet mushrooms indoors.
            </p>
            <p>
              Our kits are designed to be easy to use, and contain a complete
              list of what you will need to grow your own mushrooms. We strive
              to provide premium quality at an affordable price. With a{" "}
              <b> 100% guarantee </b>, we are confident you will love our
              mushrooms as much as we do!
            </p>
          </Block>
        </div>
        {/* Bottom Spacer */}
        <div className="blob" style={{ opacity: 0 }}>
          <section style={{ minHeight: "100px" }}></section>
        </div>
      </div>
    </div>
  )
}
