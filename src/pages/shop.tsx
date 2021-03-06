import { graphql } from "gatsby"
import React, { useState } from "react"
import { MDXQuery } from "types"
import Helmet from "src/components/Main/Helmet/Helmet"
import { Page } from "src/components/Main/Page/Page"
import Featured from "src/components/partials/Featured/Featured"
import { Content, Flex, Hr } from "src/styles"
import styled from "styled-components"

const ShopStyles = styled(Content)`
  padding-top: 100px;
`

const Search = styled.div`
  width: 100%;
  padding: 0 10px;
  max-width: 400px;
  input {
    font-size: 20px;
    padding: 10px 20px;
    width: 100%;
    border: 1px solid #e3e3e3;
    border-radius: 100px;
  }
`

const Categories = styled(Flex)`
  padding: 30px 10px;
  button {
    padding: 10px 15px;
    border-radius: 10px;
    margin: 10px;
    font-size: 18px;
    background: whitesmoke;
    margin-right: 10px;
    min-width: fit-content;
  }
  button.active {
    background-color: #4c5c6a;
    color: white;
  }
`

const FeaturedStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 50px;
`

export default function Shop({ data }: { data: MDXQuery }) {
  const nodes = data.allMdx.edges
  const [sub_category, setSub_Category] = useState("all")
  const [search, setSearch] = useState("")

  const filteredNodes = nodes.filter((e) => {
    const elem = e.node.frontmatter

    if (search) {
      const word = (
        elem.readable_class.replaceAll("'", "") +
        " " +
        elem.readable_class +
        " " +
        elem.readable_category +
        " " +
        elem.id.replaceAll("-", " ") +
        " " +
        elem.aka.join(" ")
      ).toLocaleLowerCase()

      return word.includes(search.toLocaleLowerCase())
    }

    return elem.sub_category == sub_category || sub_category == "all"
  })

  return (
    <Page navigation={{ home: true, cart: true }}>
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
      <ShopStyles>
        <Search>
          <input
            type="text"
            value={search}
            placeholder="search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </Search>
        <Categories wrap>
          <button
            onClick={() => {
              setSub_Category("all")
              setSearch("")
            }}
            className={sub_category == "all" ? "active" : ""}
          >
            All
          </button>
          <button
            onClick={() => {
              setSub_Category("oyster-mushroom-kit")
              setSearch("")
            }}
            className={sub_category == "oyster-mushroom-kit" ? "active" : ""}
          >
            Oyster Mushrooms
          </button>
          <button
            onClick={() => {
              setSub_Category("medicinal-mushroom-kit")
              setSearch("")
            }}
            className={sub_category == "medicinal-mushroom-kit" ? "active" : ""}
          >
            Medicinal Mushrooms
          </button>
        </Categories>
        <Hr />
        <FeaturedStyles>
          {filteredNodes.length ? (
            <Featured nodes={filteredNodes} />
          ) : (
            <div>no items found</div>
          )}
        </FeaturedStyles>
      </ShopStyles>
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
