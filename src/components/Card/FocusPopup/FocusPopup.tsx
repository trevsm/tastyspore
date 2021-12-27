import React, { useContext, useEffect, useState, useRef } from "react"
import { FPContext } from "../../../context"
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
  // frontmatter
  const fm = data?.frontmatter
  if (!fm) return null

  // contexts, States, & Refs
  const { setFocusId } = useContext(FPContext)
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

  // React-Spring Styles
  console.log(IsMobile())

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

  const accentColor = fm?.accent_color as string
  const mdxStyle = { "--accentColor": accentColor } as React.CSSProperties

  return (
    <animated.div
      className={"focus-popup"}
      style={{
        ...showStyles,
        ...mdxStyle,
        pointerEvents: open ? "all" : "none",
      }}
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
        <h3>{fm?.readable_category}</h3>
        <h1 style={{ color: accentColor }}>{fm?.readable_class}</h1>
        <p className="select-size-label">(select a size)</p>
        <div className="sizes">
          <div className="small selected">
            <p>small</p>
            1.5<span className="unit">lbs</span>
          </div>
          <div className="medium">
            <p>medium</p>3<span className="unit">lbs</span>
          </div>
          <div className="large">
            <p>large</p>5<span className="unit">lbs</span>
          </div>
        </div>
        <hr />
        <div className="full_description">
          <MDXRenderer>{data.body}</MDXRenderer>
        </div>
      </div>
      <div className="bottom">
        <p className="price" style={{ color: accentColor }}>
          <span>$</span>
          {price}
        </p>
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
        </div>
        <button className="buy" style={{ backgroundColor: accentColor }}>
          Add to Cart
        </button>
      </div>
    </animated.div>
  )
}
