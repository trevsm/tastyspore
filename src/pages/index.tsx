import React from "react"
import { graphql } from "gatsby"
import Footer from "../components/Main/Footer/Footer"
import Logo from "../components/Logo/Logo"
import { Page, PageWrappers } from "../components/Main/Page/Page"
import { Header, Block } from "../components/partials"
import Featured from "../components/partials/Featured/Featured"
import { MDXQuery } from "../../types"
import { Helmet } from "react-helmet"

export default function Home({ data }: { data: MDXQuery }) {
  const nodes = data.allMdx.edges
  return (
    <PageWrappers>
      <Page>
        <Helmet>
          <title>Fresh Gourmet Mushrooms | TastySpore</title>
          <meta
            name="description"
            content="The only thing better than eating mushrooms is growing them yourself. Our Mushrooms grow kits are the best kits available for growing mushrooms indoors. Our kits are designed to be easy to use, and contain a complete list of what you will need to grow your own mushrooms. We strive to provide premium quality at an affordable price. With a 100% guarantee, we are confident you will love our product. Don't miss out on our Christmas half-off sale!"
          />
          <link rel="canonical" href="https://tastyspore.com/" />
        </Helmet>
        <div className="content">
          <div className="top">
            <Logo />
          </div>
          <Header title="Today's Featured:" subtitle="" />
          <br />
          <div className="split">
            <Featured nodes={nodes} />
          </div>
          <hr />
          <Header title="Hello!" subtitle="Welcome to TastySpore." />
          <br />
          <div className="split">
            <Block>
              <p>
                The only thing better than eating mushrooms is growing them
                yourself. Our Mushrooms grow kits are the best kits available
                for growing gourmet mushrooms indoors.
              </p>
              <p>
                Our kits are designed to be easy to use, and contain a complete
                list of what you will need to grow your own mushrooms. We strive
                to provide premium quality at an affordable price. With a{" "}
                <b> 100% guarantee </b>, we are confident you will love our
                mushrooms as much as we do!
              </p>
            </Block>
          </div>
          <Footer />
          {/* Bottom Spacer */}
          <div className="blob" style={{ opacity: 0, height: "100px" }}></div>
        </div>
      </Page>
    </PageWrappers>
  )
}

export const query = graphql`
  query MyQuery {
    allMdx(sort: { order: DESC, fields: frontmatter___title }) {
      edges {
        node {
          ...ProductFrontmatter
        }
      }
    }
  }
`
