import React, { useEffect, useRef, useState } from "react"
import { Page } from "src/components/Main/Page/Page"
import Helmet from "src/components/Main/Helmet/Helmet"
import Notice from "src/components/Main/Notice/Notice"
import ShiitakeTree from "src/components/Media/ShiitakeTree"
import { WavyBreak } from "src/styles/Wavy"
import {
  maxWidth,
  shadow,
  BgColor,
  Link,
  Content,
  H1,
  H2,
  P,
  Split,
  HalfItem,
  devices,
  font,
} from "src/components/Styled"
import Logo from "src/components/Logo/Logo"
import PanLogo from "src/components/icons/Pan"
import Instagram from "src/components/icons/Social/Instagram"
import Facebook from "src/components/icons/Social/Facebook"
import styled from "styled-components"

const LogoHeader = styled.div`
  font-family: ${font.header};
  font-size: 30px;
  opacity: 0.7;
  width: fit-content;
  position: relative;
  z-index: 10;
  padding: 20px;
  svg {
    transform: translateY(10px);
  }
`
const InnerContent = styled.div`
  position: relative;
  height: 50vh;
  max-height: 600px;
  border-radius: 15px 15px 0 0;
  /* mobile */
  @media only screen and (max-width: ${devices.mobile}px) {
    & {
      margin-left: initial !important ;
    }
  }
`

interface LinkStylesProps {
  invert?: boolean
}
const LinkStyles = styled.div<LinkStylesProps>`
  cursor: pointer;
  position: relative;
  display: inline-block;
  font-size: 18px;
  padding: 18px 30px;
  box-shadow: 0px 0px 7px #00000017;
  color: $dark-text;
  background-color: white;
  letter-spacing: 2px;
  width: fit-content;

  margin-top: ${(props) => (props.invert ? "10px" : "30px")};
  border-radius: ${(props) =>
    props.invert ? "7px 40px 40px" : "40px 40px 40px 7px"};
`

const FlexSection = styled.div`
  display: flex;
  max-width: ${maxWidth};
  margin: 0 auto;
  height: 100%;
  justify-content: center;
`

const Left = styled.div`
  position: relative;
  width: 50%;
  max-width: 600px;
  min-width: 350px;
  margin-right: auto;
  height: 100%;
  padding: 5px 20px 25px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  /* mobile */
  @media only screen and (max-width: ${devices.mobile}px) {
    & {
      width: 100%;
      z-index: 5;
      h1,
      p {
        filter: drop-shadow(0 0 10px white);
      }
    }
  }
`
const Right = styled.div`
  position: absolute;
  bottom: -220px;
  right: 0;
  width: 50%;
  padding-top: 10px;
  svg {
    position: relative;
    width: 550px;
    z-index: 4;
  }
`

const ToxicItem = styled.div`
  min-width: 70px;
  min-height: 70px;
  background-color: #ebffeb;
  border: 2px solid #bee5bf;
  border-radius: 500px;
  margin: 20px 20px 0 0;
  box-shadow: ${shadow};
`

const ImageWithBorder = styled.div`
  width: 100%;
  height: 300px;
  background-color: #f3faff;
  border-radius: 30px;
  border: 2px solid #ead2c1;
`

export default function Home() {
  const year = new Date().getFullYear()

  const [sw, setSw] = useState(0)
  const contentRef = useRef(null)

  useEffect(() => {
    if (
      contentRef.current &&
      contentRef.current.offsetWidth &&
      sw !== contentRef.current.offsetWidth
    ) {
      setSw(contentRef.current.offsetWidth)
    }
    window.addEventListener("resize", () => {
      if (
        contentRef.current &&
        contentRef.current.offsetWidth &&
        sw !== contentRef.current.offsetWidth
      ) {
        setSw(contentRef.current.offsetWidth)
      }
    })
  }, [])

  const ssw = sw / 1000

  const leftMinHeight = sw * 0.5 <= 500 ? 500 : sw * 0.5

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
      <Content>
        <BgColor
          background={"var(--first)"}
          style={{ borderRadius: "15px 15px 0 0" }}
        >
          <InnerContent
            ref={contentRef}
            style={{
              minHeight: leftMinHeight,
              marginLeft: sw / 15,
            }}
          >
            <LogoHeader>
              <PanLogo width={50} />
              TastySpore
            </LogoHeader>
            <FlexSection>
              <Left>
                <H1>
                  Delicious <br /> Mushrooms & <br /> Tasty Recipes
                </H1>
                <P style={{ maxWidth: "300px" }}>
                  Grow and cook <b>gourmet</b> mushrooms at home with
                  confidence!
                </P>
                <Link transitionColor="#fff" to="/shop">
                  <LinkStyles>🍄 Go Foraging</LinkStyles>
                </Link>
                <Link transitionColor="#fff" to="#">
                  <LinkStyles invert>📖 Browse Recipes</LinkStyles>
                </Link>
              </Left>
              <Right style={{ right: (50 / sw) * 250 + "%" }}>
                <ShiitakeTree
                  style={{
                    transform: `scale(${1 - 75 / sw})`,
                    transformOrigin: "50% 85%",
                  }}
                />
              </Right>
            </FlexSection>
          </InnerContent>
        </BgColor>
      </Content>
      <WavyBreak
        values={[30, 15 - 4000 / sw, 4, 2]}
        colors={["var(--first)", "var(--second)"]}
        method={(x) => Math.sin(x)}
      />
      <Content style={{ zIndex: 5 }}>
        <BgColor background={"var(--second)"}>
          <Split justify="center">
            <HalfItem style={{ marginTop: "-60px" }}>
              <H2>Discover</H2>
              <P>
                Our shop is packed with an array of delicious gourmet mushrooms
                and is designed to help you discover just a few of the many
                different types of delicious mushrooms that are available to us.
                <br />
                <br />
                Discover a new world of savory goodness outside the simple
                cremini (button) mushroom you can find at your local grocery
                store.
              </P>
            </HalfItem>
            <HalfItem>
              <H2>Quality</H2>
              <P style={{ marginBottom: "20px" }}>
                All of our fresh produce and do-it-yourself growing kits are
                guaranteed to be free of harmful chemicals, pesticides, and
                other contaminants.
              </P>
              <Split>
                <ToxicItem></ToxicItem>
                <ToxicItem></ToxicItem>
                <ToxicItem></ToxicItem>
                <ToxicItem></ToxicItem>
              </Split>
            </HalfItem>
          </Split>
        </BgColor>
      </Content>
      <WavyBreak
        values={[30, 10, 2, -0.25]}
        colors={["var(--second)", "var(--third)"]}
        method={(x) => -1 * Math.sqrt(Math.abs(Math.sin(x)))}
      />
      <Content style={{ zIndex: 5 }}>
        <BgColor background={"var(--third)"}>
          <Split justify="center">
            <HalfItem>
              <ImageWithBorder />
            </HalfItem>
            <HalfItem width="100%">
              <H2>Our Story</H2>
              <P>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur, eaque voluptates unde deleniti magnam odit quidem
                distinctio asperiores consequuntur. Itaque pariatur facilis
                deleniti, alias ipsam enim molestiae eligendi provident id.
              </P>
            </HalfItem>
          </Split>
        </BgColor>
      </Content>
      <WavyBreak
        values={[80, 10 - ssw * 2, 15, 0]}
        colors={["var(--third)", "var(--fourth)"]}
        method={(x) => Math.sin(x)}
      />
      <Content>
        <BgColor
          background={"var(--fourth)"}
          style={{ borderRadius: "0 0 15px 15px" }}
        >
          <div className="center">
            <Logo />
            <p>
              Interested in purchasing our products locally?{" "}
              <a href="">Contact Us</a>.
            </p>
            <br />
            <br />
            <div className="flex">
              <div className="social">
                <a href="#">
                  <Instagram color="#3c414e" width={30} />
                </a>
                <a href="#">
                  <Facebook color="#3c414e" width={30} />
                </a>
              </div>
              <p>
                TastySpore <br />
                Salt Lake City, UT
              </p>
            </div>
            <br />
            <br />
            <div className="copy">
              {year} all rights reserved. TastySpore <sub>©</sub>
            </div>
          </div>
        </BgColor>
      </Content>
    </Page>
  )
}
