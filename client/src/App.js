import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import SearchResults from "./components/SearchResults";
import DuplicateResults from "./components/DuplicateResults";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    // Need Router so that Links, Routes, and Route can work correctly
    <Router>
      <div className="App">
        <header className="App-header">
          <p>Lipsey's LLC Email tracker</p>
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

export default App;
