import React, { useEffect, useState } from "react"
import { ProductFrontmatterFragment } from "types/gatsby-graphql"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { FullDescription } from "./components/FullDescription"
import { Sizes } from "./components/Sizes"
import { QuantityPrice } from "./components/QuantityPrice"

import Helmet from "src/components/Main/Helmet/Helmet"
import { PIInterface } from "types"
import { useLocalStorage } from "usehooks-ts"
import styled from "styled-components"
import { Content, H1, H2, Hr, PickQuantity } from "src/styles"

const ProductPageStyles = styled.div`
  padding-top: 30px !important;
  padding: 20px;
  position: relative;
  background-color: #fff;
  border-radius: 30px 30px 0 0;

  overflow: auto;
  .content {
    padding: 20px !important;
  }
  h1 {
    font-size: 35px;
    margin-bottom: 40px;
  }
  h2 {
    line-height: 20px;
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: bold;
  }
  h3 {
    font-size: 20px;
    font-weight: initial;
  }
  .image {
    width: fit-content;
    margin: 20px auto;
    margin-bottom: 40px;
  }
  button.buy {
  }
  button.buy.out-of-stock {
    opacity: 0.5;
    pointer-events: none;
  }
  .select-size-label {
    opacity: 0.5;
  }
  .sizes {
    display: flex;
    align-items: flex-end;
    .unit {
      display: inline-block;
      padding-left: 2px;
      font-size: 12px;
    }
    .small,
    .medium,
    .large {
      cursor: pointer;
      width: 100%;
      background: #f7f7f7;
      padding: 10px;
      margin: 10px;
      border-radius: 10px;
      border: 2px solid #ededed;
      min-height: 100%;
    }
    div.selected {
      border: 2px solid var(--accentColor);
      &:after {
        position: relative;
        display: inline-block;
        content: "(selected)";
        font-size: 14px;
        margin-top: 10px;
        text-align: center;
        width: 100%;
        color: #9d9c9c;
      }
    }
    .size-label {
      text-transform: capitalize;
    }
    .price-label {
      text-align: center;
      padding: 0;
      line-height: unset;
      padding-top: 10px;
      margin-right: 10px;
      font-size: 25px;
      font-weight: inherit;
      span {
        color: $dark-text;
        padding-right: 2px;
        font-size: 12px;
      }
    }
    .out-of-stock {
      color: #bdbdbd;
      pointer-events: none;
      .out-label {
        font-size: 15px;
      }
    }
  }
  .price {
    font-size: 22px;
    line-height: 40px;
    font-weight: bold;
    padding: 0 20px 0 10px;
    span {
      font-size: 15px;
      transform: translateY(-8px);
      padding-right: 3px;
    }
  }
`

const BuyButton = styled.button`
  padding: 10px 20px;
  background-color: $dark-text;
  font-size: 20px;
  border-radius: 100px;
  margin-left: auto;
  transition: all 0.07s ease;
  user-select: none;
  span {
    color: white;
  }
  &:active {
    transform: scale(0.9);
    opacity: 0.7;
  }
`

const H1WithSpan = styled(H1)`
  line-height: 35px;
  span {
    font-size: 24px;
    font-style: italic;
    color: #858585;
    font-weight: lighter;
  }
`

const BottomContent = styled(Content)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  background: white;
  padding: 20px;
  border-radius: 30px 30px 0 0;
  box-shadow: 0 0 20px #0000001c;
`

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
    <ProductPageStyles style={mdxStyle}>
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
      <Content>
        <div className="image">
          {image && <GatsbyImage image={image} alt={fm?.title as string} />}
        </div>
        <H2>{fm?.readable_category}</H2>
        <H1WithSpan style={{ color: accentColor }}>
          {fm?.readable_class} <span>({fm?.scientific_name})</span>
        </H1WithSpan>
        <p className="select-size-label">(select a size)</p>
        <Sizes inventory={fm.inventory} size={size} setSize={setSize} />
        <Hr />
        <FullDescription data={data} />
        <br />
        <br />
        <br />
      </Content>
      <BottomContent>
        <p className="price" style={{ color: accentColor }}>
          <span>$</span>
          {price}
        </p>
        <PickQuantity
          current={quantity}
          add={() => {
            setQuantity((prev) => (prev < maxQuantity ? prev + 1 : maxQuantity))
          }}
          minus={() => {
            setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
          }}
        />
        <BuyButton
          className={
            "buy" + (selectedItem.quantity == 0 ? " out-of-stock" : "")
          }
          style={{ backgroundColor: accentColor }}
          onClick={() => {
            setCartItems(fm.id, size, quantity)
          }}
        >
          {selectedItem.quantity == 0 ? (
            <span>No stock</span>
          ) : (
            <span>Add to cart +</span>
          )}
        </BuyButton>
      </BottomContent>
    </ProductPageStyles>
  )
}
