import { graphql } from "gatsby"

export const query = graphql`
  fragment ProductFrontmatter on Mdx {
    body
    frontmatter {
      category
      readable_category
      class
      readable_class
      featured
      accent_color
      id
      logo {
        source {
          childImageSharp {
            gatsbyImageData(
              width: 180
              placeholder: NONE
              formats: [AUTO, WEBP, AVIF]
              quality: 50
            )
          }
        }
      }
      price {
        msrp
        sale
      }
      summary
      title
    }
  }
`
