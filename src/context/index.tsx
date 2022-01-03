import React, { createContext, useMemo, ReactNode, useState } from "react"

// Purchase Item interface
interface PIInterface {
  id: string
  size: string
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

export { CartContext, CCWrapper }
export type { PIInterface }
