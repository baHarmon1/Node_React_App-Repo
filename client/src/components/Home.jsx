import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Search database for email:</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Link to="/search-results">
          <Button variant="outline-success" type="submit">
            Submit
          </Button>
        </Link>
      </Form>
      <Button variant="warning" type="submit">
        Find duplicate emails
      </Button>
    </div>
  );
}

export default Home;
