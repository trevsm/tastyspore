import React, { useEffect, useState } from "react"
import { ProductFrontmatterFragment } from "../../../types/gatsby-graphql"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Arrow from "../../components/icons/Arrow"
import { FullDescription } from "./components/FullDescription"
import { Sizes } from "./components/Sizes"
import { QuantityPrice } from "./components/QuantityPrice"

import "./Template.scss"
import { navigate } from "gatsby"
import Helmet from "../../components/Main/Helmet/Helmet"
import { PIInterface } from "../../../types"
import { useLocalStorage } from "usehooks-ts"

export function Template({ d }: { d: any }) {
  const data: ProductFrontmatterFragment = d?.mdx
  const fm = data.frontmatter

  // selected item specs
  const defaultSize = "medium"
  const [size, setSize] = useState(defaultSize)
  const [quantity, setQuantity] = useState(1)

  // items in cart
  const [_, setItems] = useLocalStorage<PIInterface[]>("my_cart", null)

  const selectedItem = fm?.inventory.filter(
    (item: any) => item?.size == size
  )[0]
  const maxQuantity = selectedItem.quantity

  const accentColor = fm?.accent_color as string
  const mdxStyle = { "--accentColor": accentColor } as React.CSSProperties

  if (!fm?.logo || !fm?.logo.source) return null
  const image = getImage(fm?.logo?.source.childImageSharp?.gatsbyImageData)

  const price = selectedItem?.price?.sale
    ? selectedItem.price.sale * quantity
    : selectedItem?.price?.msrp * quantity

  const setCartItems = (id: string, size: string, quantity: number) => {
    setItems((prev) => {
      console.log(prev)

      if (prev == undefined) {
        return [{ id, size, quantity }]
      }

      let prevQuantity = 0
      return prev
        .filter((e) => {
          if (e.id + e.size !== id + size) {
            return true
          } else {
            prevQuantity = e.quantity
          }
        })
        .concat({
          id,
          size,
          quantity:
            quantity + prevQuantity <= maxQuantity
              ? quantity + prevQuantity
              : maxQuantity,
        })
    })
    setQuantity(1)
  }

  useEffect(() => {
    if (quantity > selectedItem.quantity) {
      setQuantity(selectedItem.quantity)
    }
  }, [size])

  return (
    <div className="product-page" style={mdxStyle}>
      <Helmet
        title={fm.readable_class + " " + fm.readable_category + " | TastySpore"}
        description={fm.description}
        keywords={[
          "mushroom",
          "mushroom growing kit",
          "how to grow mushrooms",
          fm.scientific_name,
          ...fm.aka,
          ...fm.benefits,
        ]}
      />
      <button className="close" onClick={() => navigate(-1)}>
        <Arrow color="#3e3e3e" width={20} />
      </button>
      <div className="content">
        <div className="image">
          {image && <GatsbyImage image={image} alt={fm?.title as string} />}
        </div>
        <h3>{fm?.readable_category}</h3>
        <h2 style={{ color: accentColor }}>
          {fm?.readable_class} <span>({fm?.scientific_name})</span>
        </h2>
        <p className="select-size-label">(select a size)</p>
        <Sizes inventory={fm.inventory} size={size} setSize={setSize} />
        <hr />
        <FullDescription data={data} />
        <br />
        <br />
        <br />
      </div>
      <div className="bottom">
        <p className="price" style={{ color: accentColor }}>
          <span>$</span>
          {price}
        </p>
        {QuantityPrice(setQuantity, maxQuantity, quantity)}
        <button
          className={
            "buy" + (selectedItem.quantity == 0 ? " out-of-stock" : "")
          }
          style={{ backgroundColor: accentColor }}
          onClick={() => {
            setCartItems(fm.id, size, quantity)
          }}
        >
          {selectedItem.quantity == 0 ? <span>No Stock</span> : <span>+</span>}
        </button>
      </div>
    </div>
  )
}
