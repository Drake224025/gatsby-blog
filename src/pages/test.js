import React from "react"
import { navigate } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Test = () => (
  <div>
    <Header />
    <h1>This is a test page</h1>
    <button onClick={() => navigate("/")}>back</button>
    <Footer />
  </div>
)

export default Test
