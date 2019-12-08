import React from "react"
import { Card, Button } from "react-bootstrap"
import Img from "../../static/kobu.jpg"

export default () => (
  <div className="p-3">
    <Card className="card w-75">
      <Card.Img variant="top" src={Img} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>
)
