import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
import { Form, Button } from "react-bootstrap"

export default () => (
  <PrimaryLayout>
    <h1>Contact Us</h1>
    <Form className="pt-5">
      <Form.Group controlId="contactForm.email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group controlId="contactForm.subject">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="Subject ..." />
      </Form.Group>
      <Form.Group controlId="contactForm.message">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </PrimaryLayout>
)
