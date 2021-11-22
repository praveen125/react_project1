import React, { Component } from "react";

export class Projects extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="project">These are my projects</h1>
        <h2 className="finder">
          1.Github Finder URL:
          <a href="https://github-finder-praveen.netlify.app/" target="_blank">
            <button className="finders">Click Here</button>
          </a>
        </h2>
        <h2 className="mojo">
          2.Todo app URL:
          <a href="https://reacttodo-project.netlify.app/">
            <button className="mojos">Click Here</button>
          </a>
        </h2>
        <h2 className="mojo">
          3.MovieMojo URL:
          <a href="https://rishirhyspavan.github.io/Movie-Mojo/">
            <button className="mojos">Click Here</button>
          </a>
        </h2>
      </div>
    );
  }
}

export default Projects;
