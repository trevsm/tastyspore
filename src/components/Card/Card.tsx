import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ProductFrontmatterFragment } from "types/gatsby-graphql"
import "./Card.scss"
// import { Link } from "gatsby"
import { Blob, colors, Flex, Link } from "src/styles"
import styled from "styled-components"

const CardStyles = styled(Blob)`
  margin-bottom: 30px;
  max-width: 400px;
  cursor: pointer;
  h2 {
    width: fit-content;
    color: ${colors.text.dark};
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 4px;
  }
  p.summary {
    text-align: left;
    padding-top: 10px;
    font-size: 14px;
    padding-bottom: 10px;
  }
  div {
    width: 100%;
  }
  .image {
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    .more-info {
      font-size: 13px;
      border-radius: 100px;
      padding: 2px 5px;
      border: 1px solid;
    }
  }
`

const ImageStyles = styled.div`
  width: 70%;
  justify-content: left;
  display: flex;
  align-items: center;
  margin-right: 25px;
  filter: drop-shadow(3px 3px 1px #00000016);
`

export default function Card({ data }: { data: ProductFrontmatterFragment }) {
  const fm = data.frontmatter

  if (!fm?.logo?.source) return null
  const image = getImage(fm?.logo?.source?.childImageSharp?.gatsbyImageData)

  const price = fm?.inventory[1].price

  return (
    <CardStyles>
      <Link to={"/" + data.frontmatter.id} transitionColor={fm.accent_color}>
        <section>
          <Flex direction="row">
            <ImageStyles>
              {image && <GatsbyImage image={image} alt={fm?.title as string} />}
            </ImageStyles>
            <div className="text">
              <h2>{fm?.title}</h2>
              <p className="summary">{fm?.summary}</p>
              <div className="bottom">
                {price.sale ? (
                  <p className="sale">
                    <span className="cross">${price.msrp}</span>
                    <span className="cost">${price.sale}</span>
                  </p>
                ) : (
                  <span className="cost">${price.msrp}</span>
                )}
                <p className="more-info">
                  more info <span>+</span>
                </p>
              </div>
            </div>
          </Flex>
        </section>
      </Link>
    </CardStyles>
  )
}
