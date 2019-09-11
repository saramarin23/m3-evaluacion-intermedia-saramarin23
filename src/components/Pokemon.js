import React from "react";
import "./../App.css";

class Pokemon extends React.Component {
  render() {
    console.log(this.props);
    return <h2>{this.props.name}</h2>;
  }
}

export default Pokemon;
