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
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
      <button type="btn" className="btn btn-success">
        Find duplicate emails
      </button>
    </div>
  );
}

export default Home;
