import React, { Component } from "react";
import Image from "../components/img/Image.jpg";

export class Home extends Component {
  render() {
    return (
      <div className="App">
        <img className="img" alt="" src={Image} />
      </div>
    );
  }
}

export default Home;
