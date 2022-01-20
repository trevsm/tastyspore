import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { CIInterface, MDXQuery, PIInterface } from "types"
import Helmet from "src/components/Main/Helmet/Helmet"
import CartItem from "src/components/MyCart/CartItem"
import { Page } from "src/components/Main/Page/Page"
import { useLocalStorage } from "usehooks-ts"
import { useTransition } from "react-spring"
import Cart from "src/components/icons/Cart"
import ClientRender from "src/tools/ClientRender"
import { Content } from "src/styles"
import styled from "styled-components"

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

const CartTabStyles = styled(Content)`
  height: 100%;
  background-color: white;
  z-index: 0;
  a.back-button {
    position: absolute;
    left: 20px;
    margin-right: auto;
    padding: 10px;
    margin-top: 5px;
  }
  h3 {
    width: 100%;
    text-align: center;
    padding: 23px 30px 30px;
    font-size: 20px;
    font-family: system-ui;
  }
  section {
    background-color: #f7f7f7;
    border-radius: 30px 30px 0 0;
    padding: 20px;
    height: 95%;
    padding-bottom: 70%;
    overflow: auto;
  }
  overflow: hidden;

  .no-items {
    text-align: center;
    top: 50%;
    position: absolute;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    svg {
      margin-bottom: 20px;
      margin-left: -20px;
    }
    p {
      color: #c9c9c9;
      font-family: system-ui;
    }
  }
`

const CheckoutNavStyles = styled(Content)`
  position: fixed;
  bottom: 0;
  padding: 30px;
  background: #fffffff2;
  right: 0;
  left: 0;
  border-radius: 30px 30px 0 0;
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 20px;
  backdrop-filter: blur(1px);
  .sub,
  .price {
    display: flex;
    justify-content: space-between;
    font-family: system-ui;
  }
  .sub span,
  .price span {
    display: inline-block;
  }
  .sub {
    color: #c9c9c9;
    margin-bottom: 10px;
  }
  .price {
    font-size: 23px;
    line-height: 40px;
    color: #313439;
    border-top: 2px solid #e0e0e0;
    margin-top: 10px;
    padding-top: 10px;
    margin-bottom: 10px;
  }
  button {
    padding: 15px 20px;
    background: #313439;
    color: white;
    border-radius: 20px;
    font-size: 20px;
    width: 100%;
  }
`

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
        height: "110px",
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

  const setItemQuantity = (item: CIInterface, newQuantity: number) => {
    const index = items.findIndex((e) => e.id + e.size == item.id + item.size)
    const newItem = { ...items[index], quantity: newQuantity }

    items[index] = newItem
    setItems(items)
  }

  return (
    <Page navigation={{ home: true }}>
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
      <ClientRender>
        <CartTabStyles>
          <h3 className="cart">My Cart</h3>
          <section>
            {transitions.map(({ item, props, key }, index) => (
              <CartItem
                item={item}
                styles={props}
                removeItem={removeItem}
                setItemQuantity={setItemQuantity}
                key={key}
              />
            ))}

            {(!items || !items.length) && (
              <div className="no-items">
                <Cart color="#dddddd" width={150} />
                <p>No Items In Cart</p>
              </div>
            )}
          </section>
          {items && items.length && (
            <CheckoutNavStyles as="div">
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
            </CheckoutNavStyles>
          )}
        </CartTabStyles>
      </ClientRender>
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
