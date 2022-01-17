import React, { ReactNode } from "react"
import "minireset.css"
import "./Page.scss"
import Navigation from "src/components/Main/Navigation/Navigation"
import { PageStyles } from "src/styles"

function Page({
  children,
  navigation,
}: {
  children: ReactNode | ReactNode[]
  navigation: { home?: boolean; cart?: boolean }
}) {
  return (
    <PageStyles>
      <Navigation navigation={navigation} />
      {children}
    </PageStyles>
  )
}

export { Page }
