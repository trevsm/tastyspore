/**
 * Implement Gatsby's SSR (Server-Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react"
import { ServerStyleSheet } from "styled-components"

export const wrapRootElement = ({ element }) => {
  return element
}

export const onRenderBody = ({ setHeadComponents }) => {
  const sheet = new ServerStyleSheet()
  const originalCollectStyles = sheet.collectStyles
  sheet.collectStyles = (element) => {
    try {
      return originalCollectStyles.call(sheet, element)
    } catch (error) {
      // Fallback for React 19 compatibility
      return element
    }
  }
}

