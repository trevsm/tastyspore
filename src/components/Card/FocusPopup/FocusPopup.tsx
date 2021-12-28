import React, { useContext, useEffect, useState, useRef } from "react"
import { FPContext } from "../../../context"
import Arrow from "../../icons/Arrow"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

import { useSpring, animated } from "react-spring"

import "./FocusPopup.scss"
import { ProductFrontmatterFragment } from "../../../../types/gatsby-graphql"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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
  const defaultSize = "medium"
  const [size, setSize] = useState(defaultSize)
  const [scrollPos, setScroll] = useState(0)
  const mainRef = useRef<HTMLDivElement | null>(null)

  const breakpoints = useBreakpoint()

  if (!fm?.logo || !fm?.logo.source) return null
  const image = getImage(fm?.logo?.source.childImageSharp?.gatsbyImageData)

  if (!fm?.inventory) return null
  const itemData = fm?.inventory.filter((item) => item?.size == size)[0]
  const price = itemData?.price?.sale
    ? itemData.price.sale * quantity
    : itemData?.price?.msrp * quantity

  // React-Spring Styles

  const showStyles = useSpring(
    breakpoints.sm
      ? {
          transform: open ? "translateY(0%)" : "translateY(101%)",
          boxShadow: open ? "0 0 100px #0000004d" : "0 0 100px #00000000",
          opacity: 1,
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

  // set quantity to 1, reset to default size,
  // and reset scroll if switching products
  useEffect(() => {
    setQuantity(1)
    setSize(defaultSize)
    if (mainRef.current.scrollTop !== 0)
      setTimeout(() => {
        mainRef.current?.scrollTo({
          top: 0,
        })
      }, 500)
  }, [open])

  // check quantity when user switches sizes
  useEffect(() => {
    if (quantity > itemData.quantity) {
      setQuantity(itemData.quantity)
    }
  }, [size])

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
          {fm?.inventory &&
            fm.inventory.map((item, idx) => (
              <div
                key={idx}
                className={
                  item?.size +
                  (item?.size == size ? " selected" : "") +
                  (item.quantity == 0 ? " out-of-stock" : "")
                }
                onClick={() => {
                  setSize(item?.size as string)
                }}
              >
                <p>{item?.size}</p>
                {item?.weight}
                <span className="unit">lbs</span>
                {item.quantity == 0 && (
                  <p className="out-label">out of stock</p>
                )}
              </div>
            ))}
        </div>
        <hr />
        <div className="full_description">
          <MDXRenderer>{data.body}</MDXRenderer>
        </div>
      </div>
      <div className="bottom">
        <p className="price" style={{ color: accentColor }}>
          {price}
          <span>$</span>
        </p>
        <div className="quantity-and-price">
          <div className="quantity">
            <button
              className="add"
              onClick={() => {
                setQuantity((prev) =>
                  prev < itemData.quantity ? prev + 1 : itemData.quantity
                )
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
        <button
          className={"buy" + (itemData.quantity == 0 ? " out-of-stock" : "")}
          style={{ backgroundColor: accentColor }}
        >
          {itemData.quantity == 0 ? (
            <span>Out of Stock</span>
          ) : (
            <span>Add to Cart</span>
          )}
        </button>
      </div>
    </animated.div>
  )
}
