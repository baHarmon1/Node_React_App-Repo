import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function SearchResults() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  const fetchItems = async () => {
    const data = await fetch("/search-results");
    const items = await data.json();
    setItems(items);
  };

  const submitHandler = (e) =>{
    e.preventDefault()
  }

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Search database for email:</Form.Label>
          <Form.Control onChange={(e) => setQuery(e.target.value)} type="email" placeholder="Enter email" />
        </Form.Group>
        <Button variant="outline-success" type="button">
          Search for an email
        </Button>
          {items.filter((item)=> {
            if (query == '') {
              return query
            } else if (item.EMAIL.toLowerCase().includes(query.toLowerCase())) {
              return query
            }
          }).map((item, key) => (
            <div>
              <li>{item.EMAIL}</li>
            </div>
          ))}
      </Form>
      <Link to="/">
        <Button variant="success">Back to home</Button>
      </Link>
    </div>
  );
}

export default SearchResults;