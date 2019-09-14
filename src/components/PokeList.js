import React from "react";
import Pokemon from "./Pokemon";

const renderList = pokemons => {
  console.log(pokemons.map);
  return pokemons.map((pokemon, index) => {
    return <Pokemon key={index} pokemon={pokemon} />;
  });
};

const PokeList = props => {
  return <ul className="pokemon-list">{renderList(props.pokemons)}</ul>;
};

export default PokeList;
