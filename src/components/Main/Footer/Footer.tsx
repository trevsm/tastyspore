import React from "react"
import Logo from "../../Logo/Logo"
import Instagram from "../../icons/Social/Instagram"
import Facebook from "../../icons/Social/Facebook"
import "./Footer.scss"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className="footer content">
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
    </div>
  )
}
