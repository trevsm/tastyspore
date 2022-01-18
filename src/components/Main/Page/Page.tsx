import React, { ReactNode } from "react"
import "minireset.css"
import "./Page.scss"
import Navigation from "src/components/Main/Navigation/Navigation"
import { OverlayUntilLoad } from "./OverlayUntilLoad"
import styled from "styled-components"

const PageStyles = styled.div`
  position: relative;
  min-height: 100vh;
  height: 100vh;
  max-height: 100vh;
  min-width: 350px;
  overflow: auto;
  overflow-x: hidden;
  /* padding: 10px; */
`

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
