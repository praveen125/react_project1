import "./App.css";
import React, { Component } from "react";
import image from "./components/image.jpg";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./components/Projects";
import About from "./components/About";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1 className="website">My WebSite</h1>
          <Navbar />
          <img className="img" src={image} />

          <Route exact path="/" />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
