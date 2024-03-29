import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function DuplicateResults() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("/search-results");
    const items = await data.json();
    setItems(items);
  };

  let mappedItems = items.map(function (item) {
    return item.EMAIL;
  });

  let duplicates = mappedItems.filter((item, index) => {
    return mappedItems.indexOf(item) !== index;
  });

  return (
    <div>
      <p>Here is a list of duplicate emails:</p>
      {duplicates.map((duplicate) => (
        <div>
          <li>{duplicate}</li>
        </div>
      ))}
      <Link to="/">
        <Button variant="success">Back to home</Button>
      </Link>
    </div>
  );
}

export default DuplicateResults;
