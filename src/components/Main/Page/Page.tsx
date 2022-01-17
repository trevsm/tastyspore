import React, { ReactNode } from "react"
import "minireset.css"
import "./Page.scss"
import Navigation from "src/components/Main/Navigation/Navigation"
import { PageStyles } from "src/styles"
import { OverlayUntilLoad } from "./OverlayUntilLoad"

function Page({
  children,
  navigation,
}: {
  children: ReactNode | ReactNode[]
  navigation: { home?: boolean; cart?: boolean }
}) {
  return (
    <PageStyles>
      <OverlayUntilLoad />
      <Navigation navigation={navigation} />
      {children}
    </PageStyles>
  )
}

export { Page }
