import React from "react"
import { graphql } from "gatsby"
import { Page } from "../components/Main/Page/Page"
import Featured from "../components/partials/Featured/Featured"
import { MDXQuery } from "../../types"
import Helmet from "../components/Main/Helmet/Helmet"
import Notice from "../components/Main/Notice/Notice"
import Footer from "../components/Main/Footer/Footer"
import ShiitakeTree from "../components/Media/ShiitakeTree"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { WavyBreak } from "./Wavy"

export default function Home({ data }: { data: MDXQuery }) {
  const nodes = data.allMdx.edges

  return (
    <Page navigation={{ cart: true }}>
      <Helmet
        title="Delicious Mushrooms & Tasty Recipes! | TastySpore"
        description="Our Mushrooms grow kits are the best kits available for growing mushrooms indoors. With a 100% guarantee, we know you will love our mushrooms as much as we do."
        keywords={[
          "mushroom",
          "mushroom growing kit",
          "mushroom drawing",
          "mushroom menu",
          "lion's mane mushroom",
          "shiitake mushroom",
          "enoki mushroom",
          "reishi mushroom",
        ]}
      />
      <Notice />
      <div className="main-top content">
        <section>
          <div className="left">
            <h1>Delicious Mushrooms & Tasty Recipes</h1>
            <p>
              Grow and cook <b>gourmet</b> mushrooms at home with confidence!
            </p>
            <AniLink paintDrip hex={"#fff"} to={"/shop"}>
              🍄 Go Foraging
            </AniLink>
            <a href="#">📖 Browse Recipes</a>
          </div>
          <div className="right">
            <ShiitakeTree />
          </div>
        </section>
      </div>
      <WavyBreak values={[10, 10, 1, 0.5]} classNames={["first", "second"]} />
      <div className="second content">
        <br />
        <div className="split">
          <div className="info raise">
            <h2>Discover</h2>
            <p>
              Our shop is packed with an amazing array of delicious gourmet
              mushrooms and is designed to help you discover just a few of the
              many different types of delicious mushrooms that are available to
              us. Discover a new world of savory goodness outside the simple
              cremini (button) mushroom you can find at your local grocery
              store.
            </p>
          </div>
          <div className="info">
            <h2>Quality</h2>
            <p>
              All of our fresh produce and do-it-yourself growing kits are
              guaranteed to be free of harmful chemicals, pesticides, and other
              contaminants.
            </p>
          </div>
        </div>
      </div>
      <WavyBreak values={[10, 10, 1, -0.89]} classNames={["second", "third"]} />
      <div className="third content">
        <div className="split">
          <div className="info story">
            <h2>Our Story</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur, eaque voluptates unde deleniti magnam odit quidem
              distinctio asperiores consequuntur. Itaque pariatur facilis
              deleniti, alias ipsam enim molestiae eligendi provident id.
            </p>
          </div>
        </div>
      </div>
      <WavyBreak values={[10, 10, 5, 1]} classNames={["third", "footer"]} />
      <Footer />
    </Page>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___title }) {
      edges {
        node {
          ...ProductFrontmatter
        }
      }
    }
  }
`
