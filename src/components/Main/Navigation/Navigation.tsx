import React from "react"
import "./Navigation.scss"
import Home from "src/components/icons/Home"
import { useLocalStorage } from "usehooks-ts"
import { PIInterface } from "types"
import ClientRender from "src/tools/ClientRender"
import Cart from "src/components/icons/Cart"
import { Content, Flex, Link, Hide } from "src/styles"
import styled from "styled-components"

const NavigationStyles = styled(Content).attrs({
  as: "nav",
})`
  position: sticky;
  height: 0;
  top: 0;
  right: 15px;
  left: 0;
  z-index: 10;
  text-align: right;
`

const LinkStyles = styled.div<{ left?: boolean; right?: boolean }>`
  position: relative;
  display: inline-block;
  padding: 12px;
  margin: 5px;
  transition: transform 0.2s ease-out;
  background-color: white;
  box-shadow: 0px 0px 7px #00000017;
  top: 0;
  border-radius: ${(props) =>
    (props.left && "15px 13px 35px 15px") ||
    (props.right && "15px 13px 15px 35px")};
  justify-self: ${(props) =>
    (props.left && "left") || (props.right && "right")};
`

const ItemCount = styled.span`
  position: absolute;
  right: 12px;
  top: 12px;
  display: inline-block;
  border-radius: 100%;
  width: 13px;
  height: 13px;
  border: 2px solid white;
  background-color: #f36766;
  margin-right: -5px;
`

export default function Navigation({
  navigation,
}: {
  navigation: {
    home?: boolean
    cart?: boolean
  }
}) {
  const [items, _] = useLocalStorage<PIInterface[]>("my_cart", null)
  if (navigation)
    return (
      <NavigationStyles>
        <Flex justify="space-between">
          <Hide disabled={!navigation.home}>
            <Link to="/" transitionColor="#eef6ff">
              <LinkStyles left>
                <Home color="#3e3e3e" width={35} />
              </LinkStyles>
            </Link>
          </Hide>
          <Hide disabled={!navigation.cart}>
            <ClientRender>
              <Link to="/checkout" transitionColor="#fbfbfb">
                <LinkStyles right>
                  {items && items.length ? <ItemCount /> : ""}
                  <Cart color="#3e3e3e" width={30} />
                </LinkStyles>
              </Link>
            </ClientRender>
          </Hide>
        </Flex>
      </NavigationStyles>
    )
  return null
}
