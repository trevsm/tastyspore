import React from "react"
import { Helmet as H } from "react-helmet"
import { GA_TRACKING } from "gatsby-env-variables"

export default function Helmet({
  title,
  description,
  keywords,
}: {
  title: string
  description: string
  keywords: string[]
}) {
  return (
    <H>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <link rel="canonical" href="https://tastyspore.com/" />

      {GA_TRACKING && (
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-643TTLK24R"
        ></script>
      )}
      {GA_TRACKING && (
        <script>
          {`
        <!-- Global Site Tag (gtag.js) - Google Analytics -->
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments);}
        gtag('js', new Date()); gtag('config', 'G-643TTLK24R');
        `}
        </script>
      )}
    </H>
  )
}
