import React, { useState, useEffect } from "react"
import MailingList from "src/components/Forms/MailingList"
import { animated, useSpring } from "react-spring"

import { useLocalStorage } from "usehooks-ts"
import ClientRender from "src/tools/ClientRender"
import styled from "styled-components"
import { Content } from "src/styles"

const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px;
  opacity: 0.5;
  background: none;
  border: none;
  font-size: 15px;
  color: inherit;
  cursor: pointer;
`

const NoticeStyles = styled(animated.div)`
  padding: 15px;
  background-color: #838383;
  position: fixed;
  width: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  color: #ffe8e8;
  border-radius: 0 0 30px 30px;
  max-width: 400px;
  margin: 0 auto;
  * {
    color: white;
  }
  button {
    display: inline-block;
  }
  a {
    border-bottom: 1px solid;
  }

  @media only screen and (max-width: 700px) {
    & {
      right: 0;
    }
  }
`

export default function Notice() {
  const [userNotified, setUserNotified] = useLocalStorage<boolean>(
    "user-notified",
    false
  )
  const [popup, setPopup] = useState(false)

  const styles = useSpring({
    opacity: popup ? 1 : 0,
  })

  useEffect(() => {
    if (!userNotified)
      setTimeout(() => {
        setUserNotified(true)
        setPopup(true)
      }, 2000)
  }, [])

  return (
    <ClientRender>
      <Content style={{ pointerEvents: popup ? "all" : "none" }}>
        <NoticeStyles className={"notice"} style={styles}>
          <CloseButton
            onClick={() => {
              setPopup(false)
            }}
          >
            (close)
          </CloseButton>
          <p style={{ paddingBottom: "10px" }}>
            <b style={{ fontSize: "20px" }}>Hey!</b> &#128516; <br />{" "}
            We&rsquo;re still getting things set up, so some pages might not
            work quite yet. Check back here soon or join our mailing list to get
            notified when we officially launch. <br /> <br /> (Enter your email
            below to get notified &#128227;)
          </p>
          <MailingList />
        </NoticeStyles>
      </Content>
    </ClientRender>
  )
}
