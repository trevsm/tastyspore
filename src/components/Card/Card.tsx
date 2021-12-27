import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import React, { useContext } from "react"
import { FocusPopContext } from "../../context"
import { ProductFrontmatterFragment } from "../../../types/gatsby-graphql"
import FocusPopup from "./FocusPopup/FocusPopup"
import "./Card.scss"

export default function Card({ data }: { data: ProductFrontmatterFragment }) {
  const { focusId, setFocusId } = useContext(FocusPopContext)
  const fm = data.frontmatter

  if (!fm?.logo?.source) return null
  const image = getImage(fm?.logo?.source?.childImageSharp?.gatsbyImageData)

  return (
    <div className="blob card">
      <FocusPopup data={data} open={focusId == fm.id} />
      <button
        onClick={() => {
          setFocusId(fm?.id as string)
        }}
      >
        <section>
          <div className="flex">
            <div className="image">
              {image && <GatsbyImage image={image} alt={fm?.title as string} />}
            </div>
            <div className="text">
              <h2>{fm?.title}</h2>
              <p className="summary">{fm?.summary}</p>
              <div className="bottom">
                {fm?.price?.sale ? (
                  <p className="sale">
                    <span className="cross">${fm?.price.msrp}</span>
                    <span className="cost">${fm?.price.sale}</span>
                  </p>
                ) : (
                  <span className="cost">${fm?.price?.msrp}</span>
                )}
                <p className="more-info">
                  more info <span>+</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </button>
    </div>
  )
}
