import React from "react";
import { Form, Button } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Search database for email:</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Button variant="outline-success" type="submit">
          Submit
        </Button>
      </Form>
      <Button variant="warning" type="submit">
        Find duplicate emails
      </Button>
    </div>
  );
}

export default Home;
