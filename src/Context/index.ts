import { createContext } from "react"
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

export { FocusPopContext }
