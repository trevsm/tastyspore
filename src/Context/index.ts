import { createContext } from "react"

interface PurchaseItemInterface {
  id: string
  quantity: number
}

interface CartInterface {
  items: PurchaseItemInterface[]
  setItems: React.Dispatch<React.SetStateAction<PurchaseItemInterface>>
}

const CartContext = createContext<CartInterface>({
  items: [],
  setItems: () => {
    // do nothing
  },
})

interface FocusPopContextInterface {
  focusId: string
  setFocusId: React.Dispatch<React.SetStateAction<string>>
}

const FocusPopContext = createContext<FocusPopContextInterface>({
  focusId: "",
  setFocusId: () => {
    // do nothing
  },
})

export { CartContext, FocusPopContext }
