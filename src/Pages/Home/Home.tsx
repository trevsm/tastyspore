import React, { useEffect, useState } from "react"
import { Logo } from "../../Components"
import MailingList from "../../Components/Forms/MailingList"
import { Card, Header, Info } from "../../Partial"

export default function Home() {
  const [height, setHeight] = useState(0)
  const [popup, setPopup] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setPopup(true)
    }, 2000)
  }, [])
  return (
    <div
      className="page"
      onScroll={(e: React.UIEvent<HTMLDivElement>) => {
        setHeight(e.currentTarget.scrollTop)
      }}
    >
      <div className={"notice" + (popup ? " show" : "")}>
        <button
          style={{
            position: "absolute",
            right: "0",
            top: "0",
            padding: "10px",
            opacity: ".5",
            background: "none",
            border: "none",
            fontSize: "15px",
            color: "inherit",
            cursor: "pointer",
          }}
          onClick={() => {
            setPopup(false)
          }}
        >
          (hide popup)
        </button>
        <p>
          <b>Hey!</b> You found us! &#128516; <br /> Looks like we&rsquo;re
          still getting things set up, so some pages might not work quite yet.
          Check back here soon or join our mailing list to get notified when we
          officially launch. <br /> <br /> (Enter your email below to get
          notified &#128227;)
        </p>
        <MailingList />
      </div>
      <div className="content">
        <div className="top">
          <Logo height={height} />
        </div>
        <Header title="Today's Featured:" subtitle="" />
        <div className="split">
          <Card
            title="Pink Oyster Kit"
            description="Pink Oyster mushrooms aren't just strikingly beautiful. They are also succulent and savory!"
            imageSrc="/pink_oyster.png"
            imageWidth={140}
            price={{ msrp: "$30", sale: "$23" }}
          />
          <Card
            title="Golden Oyster Kit"
            description="Golden Oyster mushrooms are aromatic, delicate, and delicious. They also have a hint of nuttiness."
            imageSrc="/golden_oyster.png"
            imageWidth={150}
            price={{ msrp: "$30", sale: "$23" }}
          />
        </div>
        <hr />
        <div className="split">
          <Info
            title="Introduction"
            subtitle="Welcome to TastySpore!"
            description={
              <>
                <p>
                  The only thing better than eating mushrooms is growing them
                  yourself. Our Mushrooms grow kits are the best kits available
                  for growing gourmet mushrooms indoors.
                </p>
                <p>
                  Our kits are designed to be easy to use, and contain a
                  complete list of what you will need to grow your own
                  mushrooms. We strive to provide premium quality at an
                  affordable price. With a <b> 100% guarantee </b>, we are
                  confident you will love our mushrooms as much as we do!
                </p>
              </>
            }
          />
        </div>
        {/* Bottom Spacer */}
        <div className="blob" style={{ opacity: 0 }}>
          <section style={{ minHeight: "100px" }}></section>
        </div>
      </div>
    </div>
  )
}
