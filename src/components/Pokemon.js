import React from "react";

const renderTypes = pokemon => {
  return pokemon.types.map((type, index) => <li key={index}>{type}</li>);
};

const Pokemon = props => {
  return (
    <li className="pokemon-card">
      <img
        className="pokemon-photo"
        src={props.pokemon.url}
        alt={props.pokemon.name}
      />

      <h2 className="pokemon-name">{props.pokemon.name}</h2>
      <ul className="types-list">{renderTypes(props.pokemon)}</ul>
    </li>
  );
};

export default Pokemon;
