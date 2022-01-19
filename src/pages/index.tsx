import React, { useEffect, useRef, useState } from "react"
import { Page } from "src/components/Main/Page/Page"
import Helmet from "src/components/Main/Helmet/Helmet"
import Notice from "src/components/Main/Notice/Notice"
import ShiitakeTree from "src/components/Media/ShiitakeTree"
import { StaticWave } from "src/styles/Wavy"
import {
  maxWidth,
  shadow,
  BgColor,
  Link,
  Content,
  H1,
  H2,
  P,
  Flex,
  HalfItem,
  devices,
  font,
  colors,
} from "src/styles"
import Logo from "src/components/Logo/Logo"
import PanLogo from "src/components/icons/Pan"
import Instagram from "src/components/icons/Social/Instagram"
import Facebook from "src/components/icons/Social/Facebook"
import styled from "styled-components"
import Small_Cloud from "src/components/Media/Small_Cloud"
import Large_Cloud from "src/components/Media/Large_Cloud"
import { Trail } from "src/styles/Trail"

const LogoHeader = styled.div`
  font-family: ${font.header};
  font-size: 30px;
  width: fit-content;
  position: relative;
  z-index: 10;
  padding: 10px 25px;
  svg {
    transform: translateY(10px);
  }
`
const InnerContent = styled.div`
  position: relative;
  height: 50vh;
  max-height: 600px;
  border-radius: 15px 15px 0 0;
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
  border: 3px solid #bee5bf;
  border-radius: 500px;
  margin: 20px 20px 0 0;
  box-shadow: ${shadow};
`

const ImageWithBorder = styled.div`
  width: 100%;
  max-width: 400px;
  height: 300px;
  background-color: #f3faff;
  border-radius: 30px;
  border: 3px solid #ead2c1;
`

const SocialFlex = styled(Flex)`
  align-items: center;
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 10px;
  justify-content: space-evenly;
  padding: 10px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  a:first-of-type {
    margin-right: 15px;
  }
`
/* 
<WavyBreak
  values={[30, 15 - 4000 / sw, 4, 2]}
  colors={["var(--first)", "var(--second)"]}
  method={(x) => Math.sin(x)}
/> 
*/

export default function Home() {
  const year = new Date().getFullYear()

  // H1 enter animation
  const [open, setOpen] = useState(false)

  // ContentRef width for moving things around
  const [sw, setSw] = useState(0)
  const contentRef = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      setOpen(true)
    }, 500)
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
            }}
          >
            <Trail open={open} animation="fade" tension={100}>
              <LogoHeader>
                <PanLogo width={50} />
                TastySpore
              </LogoHeader>
            </Trail>
            <FlexSection style={{ marginLeft: Math.pow(sw, 2) / 10000 - 15 }}>
              <Small_Cloud
                style={{
                  width: 150,
                  position: "absolute",
                  top: "15%",
                  left: "30%",
                }}
              />
              <Large_Cloud
                style={{
                  width: 450,
                  position: "absolute",
                  top: "30%",
                  left: sw > 700 ? "65%" : "450px",
                }}
              />
              <Left>
                <div
                  style={{
                    minHeight: "160px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Trail open={open} animation="shift" tension={500}>
                    <H1 style={{ margin: "20px 0" }}>
                      <p>Delicious</p>
                      <p>Mushrooms &</p>
                      <p>Tasty Recipes</p>
                    </H1>
                    <P style={{ maxWidth: "300px", marginBottom: "20px" }}>
                      Grow and cook <b>gourmet</b> mushrooms at home with
                      confidence!
                    </P>
                    <Link transitionColor="#fff" to="/shop">
                      <LinkStyles>🍄 Go Foraging</LinkStyles>
                    </Link>
                    <Link transitionColor="#fff" to="#">
                      <LinkStyles invert>📖 Browse Recipes</LinkStyles>
                    </Link>
                  </Trail>
                </div>
              </Left>
              <Right style={{ right: (57 / sw) * 300 + "%" }}>
                <ShiitakeTree
                  style={{
                    transform: `translateY(166px) rotate(2deg)`,
                    transformOrigin: "50% 85%",
                  }}
                />
              </Right>
            </FlexSection>
          </InnerContent>
        </BgColor>
      </Content>

      <StaticWave
        top={colors.material.sky}
        bottom={colors.material.grass}
        clipIndex={0}
      />

      <Content style={{ zIndex: 5 }}>
        <BgColor background={"var(--second)"}>
          <Flex justify="center" wrap>
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
              <Flex>
                <ToxicItem></ToxicItem>
                <ToxicItem></ToxicItem>
                <ToxicItem></ToxicItem>
                <ToxicItem></ToxicItem>
              </Flex>
            </HalfItem>
          </Flex>
        </BgColor>
      </Content>

      <StaticWave
        top={colors.material.grass}
        bottom={colors.material.dirt}
        clipIndex={1}
        shrink
      />

      <Content style={{ zIndex: 6 }}>
        <BgColor background={"var(--third)"}>
          <Flex justify="center" wrap>
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
          </Flex>
        </BgColor>
      </Content>

      <StaticWave
        top={colors.material.dirt}
        bottom={colors.material.rock}
        clipIndex={2}
        shrink
      />

      <Content style={{ zIndex: 6 }}>
        <BgColor
          background={"var(--fourth)"}
          style={{ borderRadius: "0 0 15px 15px" }}
        >
          <Flex
            direction="column"
            justify="center"
            style={{
              textAlign: "center",
              padding: "20px",
              width: "fit-content",
              margin: "0 auto",
            }}
          >
            <Logo />
            <br />
            <br />
            <P>
              Interested in purchasing our products locally?{" "}
              <a href="">Contact Us</a>.
            </P>
            <br />
            <br />
            <SocialFlex justify="center">
              <div>
                <a href="https://www.instagram.com/tastyspore/">
                  <Instagram color="#3c414e" width={30} />
                </a>
                <a href="https://www.facebook.com/tastyspore">
                  <Facebook color="#3c414e" width={30} />
                </a>
              </div>
              <P>
                TastySpore <br />
                Salt Lake City, UT
              </P>
            </SocialFlex>
            <br />
            <br />
            <div>
              {year} all rights reserved. TastySpore <sub>©</sub>
            </div>
          </Flex>
        </BgColor>
      </Content>
    </Page>
  )
}
