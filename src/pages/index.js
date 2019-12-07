import React from "react"
import Kobu from "../../static/kobu.jpg"
import { Link } from "gatsby"

export default () => (
  <div>
    <h1>Test Blog</h1>
    <img src={Kobu} height="300px" width="300px"></img>
    <Link to="/test/">connect</Link>
  </div>
)
