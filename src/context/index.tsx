import React, { createContext, useMemo, ReactNode, useState } from "react"

// Purchase Item interface
interface PIInterface {
  data: {
    id: string
    type?: string
    weight?: number
    title: string
    class: string
    category: string
    size?: string
    image: any
    quantity?: number
    price?: {
      msrp?: number
      sale?: number
    }
  }
  quantity: number
}

// Cart Interface & Context
interface CartInterface {
  items: PIInterface[]
  setItems: React.Dispatch<React.SetStateAction<PIInterface[]>>
}
const CartContext = createContext<CartInterface>({
  items: [],
  setItems: () => {
    // do nothing
  },
})

// Cart Context Wrapper
function CCWrapper({ children }: { children: ReactNode | ReactNode[] }) {
  const [items, setItems] = useState<PIInterface[]>()

  const value = useMemo(() => ({ items, setItems }), [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// Focus Pop Interface & Context
interface FPInterface {
  focusId: string
  setFocusId: React.Dispatch<React.SetStateAction<string>>
}
const FPContext = createContext<FPInterface>({
  focusId: "",
  setFocusId: () => {
    // do nothing
  },
})

// Focus Pop Context Wrapper
function FPWrapper({ children }: { children: ReactNode | ReactNode[] }) {
  const [focusId, setFocusId] = useState("")

  const value = useMemo(() => ({ focusId, setFocusId }), [focusId])

  return <FPContext.Provider value={value}>{children}</FPContext.Provider>
}

export { CartContext, CCWrapper, FPWrapper, FPContext }
export type { PIInterface }
