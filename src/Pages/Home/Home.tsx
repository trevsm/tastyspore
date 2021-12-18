import React, { useState } from "react"
import { Logo } from "../../Components"
import { Card, Header } from "../../Partial"

export default function Home() {
  const [height, setHeight] = useState(0)

  return (
    <div
      className="page"
      onScroll={(e: React.UIEvent<HTMLDivElement>) => {
        setHeight(e.currentTarget.scrollTop)
      }}
    >
      <div className="content">
        <div className="top">
          <Logo height={height} />
        </div>
        <Header title="Today's Featured:" subtitle="" />
        <div className="split">
          <Card
            title="Pink Oyster"
            description="Pink Oyster mushrooms aren't just strikingly beautiful. They are also succulent and savory!"
            imageSrc="/pink_oyster.png"
          />
          <Card title="Pink Oyster" description="asdf" />
        </div>
        <Card title="Pink Oyster" description="asdf" />
        <div className="split">
          <Card title="Pink Oyster" description="asdf" />
          <Card title="Pink Oyster" description="asdf" />
        </div>
        <div className="blob" style={{ opacity: 0 }}>
          <section style={{ minHeight: "100px" }}></section>
        </div>
      </div>
    </div>
  )
}
