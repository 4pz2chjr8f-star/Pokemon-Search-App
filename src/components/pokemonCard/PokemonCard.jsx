import styles from "./pokemonCard.module.css";

export const PokemonCard = ({ pokemon }) => {
  if (!pokemon) {
    return null;
  }

  const image =
    pokemon.sprites.other.dream_world.front_default ||
    pokemon.sprites.front_default;

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={image} alt={pokemon.name} />
      {/* <p>Pókedex Number: # {pokemon.id}</p> */}
    </div>
  );
};
