import React from "react"
import Logo from "../../Logo/Logo"
import Instagram from "../../icons/Social/Instagram"
import Facebook from "../../icons/Social/Facebook"
import "./Footer.scss"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className="footer">
      <div className="content">
        <Logo />
        <br />
        <p>
          Interesting in purchasing our products locally?{" "}
          <a href="">Contact Us</a>.
        </p>
        <br />
        <div className="social">
          <a href="#">
            <Instagram color="#fff" width={30} />
          </a>
          <a href="#">
            <Facebook color="#fff" width={30} />
          </a>
        </div>
        <br />
        <p>
          TastySpore <br />
          Salt Lake City, UT
        </p>
        <br />
        <div className="copy">
          {year} all rights reserved. TastySpore <sub>©</sub>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}
