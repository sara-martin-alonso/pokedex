import React from "react";

export default function PokeItem(props) {
  const { data, handleClick, chosenPokemon } = props;
  const url = data.url;

  return (
    <li
      className={`item${chosenPokemon?.name === data.name ? " active" : ""}`}
      onClick={() => handleClick(url)}
    >
      <p>{data.name}</p>
    </li>
  );
}
