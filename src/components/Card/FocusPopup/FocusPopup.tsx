import React, { useContext, useEffect, useState, useRef } from "react"
import { FocusPopContext } from "../../../context"
// import getItem from "../../data/getItem"
import Arrow from "../../icons/Arrow"
import IsMobile from "../../../tools/IsMobile"

import { useSpring, animated } from "react-spring"

import "./FocusPopup.scss"
import { ProductFrontmatterFragment } from "../../../../types/gatsby-graphql"
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function FocusPopup({
  data,
  open,
}: {
  data: ProductFrontmatterFragment
  open: boolean
}) {
  const fm = data?.frontmatter
  if (!fm) return null
  // contexts, States, & Refs
  const { setFocusId } = useContext(FocusPopContext)
  const [quantity, setQuantity] = useState(1)
  const [scrollPos, setScroll] = useState(0)
  const mainRef = useRef<HTMLDivElement | null>(null)

  // Price & Image
  if (!fm.price) return null
  const price =
    (fm.price.sale ? (fm?.price.sale as number) : (fm?.price?.msrp as number)) *
    quantity

  if (!fm?.logo || !fm?.logo.source) return null
  const image = getImage(fm?.logo?.source.childImageSharp?.gatsbyImageData)

  // const price = data?(data?.price.sale ? item.price.sale : item.price.msrp) * quantity:null

  // React-Spring Styles
  const showStyles = useSpring(
    IsMobile()
      ? {
          transform: open ? "translateY(0%)" : "translateY(101%)",
          boxShadow: open ? "0 0 100px #0000004d" : "0 0 100px #00000000",
        }
      : {
          opacity: open ? 1 : 0,
        }
  )

  const closeBtnStyles = useSpring({
    boxShadow:
      scrollPos <= 10 ? "0px 0px 7px #00000000" : "0px 0px 7px #00000017",
  })

  // Functions
  const setScrollPos = (e: React.UIEvent) => {
    const elem = e.target as HTMLDivElement
    setScroll(elem.scrollTop)
  }

  useEffect(() => {
    setQuantity(1)
    mainRef.current?.scrollTo(0, 0)
  }, [open])

  return (
    <animated.div
      className={"focus-popup"}
      style={{ ...showStyles, pointerEvents: open ? "all" : "none" }}
      ref={mainRef}
      onScroll={setScrollPos}
    >
      <animated.button
        className="close"
        style={closeBtnStyles}
        onClick={() => {
          setFocusId("")
        }}
      >
        <Arrow color="#3e3e3e" width={20} />
      </animated.button>
      <div className="content">
        <div className="image">
          {image && <GatsbyImage image={image} alt={fm?.title as string} />}
        </div>
        <h3>{fm?.category}</h3>
        <h1>{fm?.class}</h1>
        <div className="quantity-and-price">
          <div className="quantity">
            <button
              className="add"
              onClick={() => {
                setQuantity((prev) => (prev < 10 ? prev + 1 : 10))
              }}
            >
              +
            </button>
            <span className="num">{quantity}</span>
            <button
              className="minus"
              onClick={() => {
                setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
              }}
            >
              -
            </button>
          </div>
          <p className="price">${price}</p>
        </div>
        <div className="full_description">
          <MDXRenderer>{data.body}</MDXRenderer>
        </div>
      </div>
      <div className="bottom">
        <button className="buy">Add to Cart</button>
      </div>
    </animated.div>
  )
}
