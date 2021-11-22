import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./components/Projects";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

export class App extends Component {
  render() {
    return (
      <Router>
        <h1 className="App">My Website</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/MyProjects" element={<Projects />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
