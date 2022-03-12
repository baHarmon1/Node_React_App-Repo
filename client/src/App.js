import React, { Component } from 'react';
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import SearchResults from "./components/SearchResults";
import DuplicateResults from "./components/DuplicateResults";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    return ( 
      // Need Router so that Links, Routes, and Route can work correctly
    <Router>
    <div className="App">
      <header className="App-header">
        {/* Adding a Home component so that the application is organized for ease of use in future changes */}
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/search-results" element={<SearchResults/>}/>
        <Route path="/duplicate-results" element={<DuplicateResults/>}/>
        </Routes>
      </header>
    </div>
  </Router>
     );
  }
}
 
export default App;
