import { ProductFrontmatterFragment } from "./gatsby-graphql"

interface MDXQuery {
  allMdx: {
    edges: {
      node: ProductFrontmatterFragment
    }[]
  }
}

// product item interface
interface PIInterface {
  id: string
  size: string
  quantity: number
}

//cart item interface
interface CIInterface {
  id: string
  title: string
  size: string
  quantity: number
  price: { msrp: number; sale?: number }
  image: any
  weight: number
}

// Cart Interface & Context
interface CartInterface {
  items: PIInterface[]
  setItems: React.Dispatch<React.SetStateAction<PIInterface[]>>
}

export type { MDXQuery, PIInterface, CartInterface, CIInterface }
