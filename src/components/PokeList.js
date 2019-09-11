import React from "react";
import Pokemon from "./Pokemon";
import "./../App.css";

class PokeList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.name);
    const { pokemon } = this.props;
    return (
      <ul className="App-Cards_List">
        {pokemon.map((name, url, types, id) => {
          return <Pokemon key={id} name={name} img={url} types={types} />;
        })}
      </ul>
    );
  }
}

export default PokeList;
