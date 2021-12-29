import { graphql } from "gatsby"

export const query = graphql`
  fragment ProductFrontmatter on Mdx {
    body
    frontmatter {
      accent_color
      category
      class
      featured
      id
      readable_category
      readable_class
      summary
      title
      logo {
        source {
          childImageSharp {
            gatsbyImageData(
              width: 170
              placeholder: DOMINANT_COLOR
              formats: [WEBP]
              quality: 70
            )
          }
        }
      }
      inventory {
        type
        weight
        size
        quantity
        price {
          msrp
          sale
        }
      }
    }
  }
`
