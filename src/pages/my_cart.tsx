import React, { useEffect, useMemo, useRef, useState } from "react"
import { graphql } from "gatsby"
import { CIInterface, MDXQuery, PIInterface } from "../../types"
import Helmet from "../components/Main/Helmet/Helmet"
import CartItem from "../components/MyCart/CartItem"
import Home from "../components/icons/Home"
import { Page } from "../components/Main/Page/Page"
import { useLocalStorage } from "usehooks-ts"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useTransition } from "react-spring"

function addZeroes(num: string) {
  const dec = num.split(".")[1]
  const len = dec && dec.length > 2 ? dec.length : 2
  return Number(num).toFixed(len)
}

function getTotalPrices(itemsWithData: any[]) {
  const sub_total = !itemsWithData
    ? 0
    : itemsWithData
        .map((e) => e.quantity * e.price.msrp)
        .reduce((a, b) => a + b, 0)
  const sales_tax = +(sub_total * 0.16).toFixed(2)
  const total = (sales_tax + sub_total).toFixed(2)
  return {
    sub_total,
    sales_tax,
    total,
  }
}

const createItemData = (
  items: PIInterface[],
  data: { allMdx: { edges: any[] } }
): CIInterface[] => {
  const final: CIInterface[] = []
  if (items && items.length) {
    items.forEach((item) => {
      const id = item.id
      const size = item.size
      const quantity = item.quantity
      data.allMdx.edges.forEach((catalogItem) => {
        const cfm = catalogItem.node.frontmatter
        if (cfm.id == id) {
          cfm.inventory.forEach((inventoryItem: CIInterface) => {
            if (inventoryItem.size == size)
              final.push({
                id,
                title: cfm.title,
                size: inventoryItem.size,
                quantity,
                price: { msrp: inventoryItem.price.msrp },
                image: cfm.logo.source.childImageSharp,
                weight: inventoryItem.weight,
                accent_color: cfm.accent_color,
              })
          })
        }
      })
    })
  }
  return final
}

export default function MyCart({ data }: { data: MDXQuery }) {
  const [items, setItems] = useLocalStorage<PIInterface[]>("my_cart", null)
  const [itemsWithData, setItemsWithData] = useState<CIInterface[]>(
    createItemData(items, data)
  )
  const { sub_total, sales_tax, total } = getTotalPrices(itemsWithData)

  useEffect(() => {
    setItemsWithData(createItemData(items, data))
  }, [items])

  const removeItem = (id: string, size: string) => {
    setItems((prev) => {
      return prev.filter((e) => e.id + e.size !== id + size)
    })
  }

  const transitions = useTransition(
    itemsWithData.map((item, i) => {
      return { ...item }
    }),
    (d) => d.id + d.size,
    {
      from: { opacity: 0 },
      enter: {
        opacity: 1,
        height: "100px",
        paddingTop: "15px",
        paddingBottom: "15px",
        marginBottom: "20px",
      },
      leave: {
        opacity: 0,
        height: "0px",
        paddingTop: "0px",
        paddingBottom: "0px",
        marginBottom: "0px",
        overflow: "hidden",
      },
    }
  )

  return (
    <Page>
      <Helmet
        title="Delicious Mushrooms & Tasty Recipes! | TastySpore"
        description="Our Mushrooms grow kits are the best kits available for growing mushrooms indoors. With a 100% guarantee, we know you will love our mushrooms as much as we do."
        keywords={[
          "mushroom",
          "mushroom growing kit",
          "mushroom drawing",
          "mushroom menu",
          "lion's mane mushroom",
          "shiitake mushroom",
          "enoki mushroom",
          "reishi mushroom",
        ]}
      />
      <div>
        <div className="cart-tab">
          <AniLink paintDrip hex="#fff0e4" to="/" className="back-button">
            <Home color="#3e3e3e" width={40} />
          </AniLink>
          <h3 className="cart">My Cart</h3>
          <section>
            {transitions.map(({ item, props, key }, index) => (
              <CartItem
                item={item}
                styles={props}
                removeItem={removeItem}
                key={key}
              />
            ))}

            {/*
              <div className="no-items">
                <Cart color="#dddddd" width={150} />
                <p>No Items In Cart</p>
              </div>
            */}
          </section>
          {items && items.length && (
            <div className="nav">
              <p className="sub">
                Sub total: <span>${sub_total}</span>
              </p>
              <p className="sub">
                Tax: <span>${addZeroes(sales_tax + "")}</span>
              </p>
              <p className="price">
                Total: <span>${total}</span>
              </p>
              <button
                onClick={() => {
                  alert(
                    "Thank you for your interest! Orders are currently disabled until we officially launch. Check back here soon for updates!"
                  )
                }}
              >
                Continue to shipping
              </button>
            </div>
          )}
        </div>
      </div>
    </Page>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___title }) {
      edges {
        node {
          ...ProductFrontmatter
        }
      }
    }
  }
`
