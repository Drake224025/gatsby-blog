import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default props => (
  <div>
    <Header />
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-xs-6">{props.children}</div>
      </div>
    </div>
    <Footer />
  </div>
)
