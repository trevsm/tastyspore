// declare type gatsby-plugin-transition-link/AniLink
declare module "gatsby-plugin-transition-link/AniLink" {
  import { LinkProps } from "gatsby"
  import { TransitionState } from "gatsby-plugin-transition-link"

  export interface AniLinkProps extends LinkProps {
    paintDrip?: boolean
    swipe?: boolean
    cover?: boolean
    direction?: "left" | "right" | "top" | "bottom"
    bg?: string
    duration?: number
    entryOffset?: number
    exitOffset?: number
    hex?: string
    trigger?: () => void
    entry?: {
      delay?: number
      length?: number
    }
    exit?: {
      length?: number
    }
    to: string
    state?: TransitionState
    style?: object
  }

  export default class AniLink extends React.Component<AniLinkProps> {}
}
