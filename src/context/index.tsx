import React, { createContext, useMemo, ReactNode, useState } from "react"

// Purchase Item interface
interface PIInterface {
  id: string
  quantity: number
}

// Cart Interface
interface CartInterface {
  items: PIInterface[]
  setItems: React.Dispatch<React.SetStateAction<PIInterface>>
}

// Cart Context
const CartContext = createContext<CartInterface>({
  items: [],
  setItems: () => {
    // do nothing
  },
})

// Focus Pop Interface
interface FPInterface {
  focusId: string
  setFocusId: React.Dispatch<React.SetStateAction<string>>
}

// Focus Pop Context
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

export { CartContext, FPWrapper, FPContext }
