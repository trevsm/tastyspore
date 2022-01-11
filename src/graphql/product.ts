import { graphql } from "gatsby"

export const query = graphql`
  fragment ProductFrontmatter on Mdx {
    frontmatter {
      accent_color
      category
      sub_category
      class
      featured
      id
      readable_category
      readable_sub_category
      readable_class
      summary
      title
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
      scientific_name
      profile {
        aroma
        flavor
        similar
        texture
      }
      nutrition {
        calories
        fat
        carbs
        fiber
        protein
        vitamins {
          name
          type
          value
        }
      }
      description
      benefits
      aka
      grow {
        humidity
        size
        temp {
          degrees {
            max
            min
          }
          readable
        }
        time
      }
      logo {
        source {
          childImageSharp {
            gatsbyImageData(width: 200, placeholder: TRACED_SVG, quality: 100)
          }
        }
      }
      shelf_life {
        dried
        fresh
      }
    }
  }
`
