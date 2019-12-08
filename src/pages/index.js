import React from "react"
import { Row } from "react-bootstrap"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Post from "../components/Post"

export default () => (
  <div>
    <Header>Gatsby-blog</Header>
    <div className="container">
      <Row>
        <Post />
        <Post />
      </Row>
    </div>
    <Footer />
  </div>
)
