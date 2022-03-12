import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <p>Lipsey's LLC Email Tracker</p>
      <Link to="/search-results">
          <Button variant="outline-success" type="submit">
            Search for an email
          </Button>
      </Link>
      <Link to="/duplicate-results">
        <Button variant="warning" type="submit">
          Find duplicate emails
        </Button>
      </Link>
    </div>
  );
}

export default Home;
